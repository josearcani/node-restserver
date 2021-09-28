const { response } = require("express")
const { ObjectId } = require('mongoose').Types;

const { User, Category, Product} = require('../models')

const allowedCollections = [
  'users',
  'products',
  'categories',
  'roles',
];

// busqueda de usuario por mongoID o nombre
const searchUsers = async (term = '', res = response) => {
  const isMongoId = ObjectId.isValid(term); // boolean if is mongoid

  if (isMongoId) {
    const user = await User.findById(term);

    return res.json({
      results: user ? [ user ] : []
    });
  }

  // terms puede ser name o email
  const regex = new RegExp(term, 'i'); // case insensitive

  const [count, users] = await Promise.all([
    User.count({
      $or: [{ name: regex }, { email: regex }],
      $and: [{ state: true }]
    }),
    User.find({
      $or: [{ name: regex }, { email: regex }],
      $and: [{ state: true }]
    })
  ])

  res.json({
    total: count,
    results: users
  });
}

const search = (req, res = response) => {

  const {collection, term} = req.params;

  // si no existe la colleción que buscan
  if (!allowedCollections.includes(collection)) {
    return res.status(400).json({
      msg: `The collections allowed are ${allowedCollections}`
    })
  }

  switch (collection) {
    case 'users':
      searchUsers(term, res);

      break;
    case 'products':
      break;
    case 'categories':
      break;
    default:
      res.status(500).json('Sorry, collections under constructions :P');
  }
}

module.exports = {
  search,
}
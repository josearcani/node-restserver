const { request, response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');


const getUsers = (req = request, res = response) => {  
  const { fname, lname, page = 1 } = req.query;

  res.json({
    msg: 'get API - controller',
    fname,
    lname,
    page,
  });
}

const postUsers = async (req, res = response) => {
  const { name, email, password, role } = req.body;

  const user = new User({ name, email, password, role });

  // hashing the password
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  user.password = hash;

  // save to db
  await user.save();
  
  res.json({
    msg: 'post API - controller',
    user
  });
}

const putUsers = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: 'put API - controller',
    id
  });
}

const patchUsers = (req, res = response) => {
  
  res.json({
    msg: 'patch API - controller'
  });
}

const deleteUsers = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msg: 'delete API - controller',
    id
  });
}

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers,
};

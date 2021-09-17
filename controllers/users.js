const { request, response } = require('express');

const getUsers = (req = request, res = response) => {  
  const { fname, lname, page = 1 } = req.query;

  res.json({
    msg: 'get API - controller',
    fname,
    lname,
    page,
  });
}

const postUsers = (req, res = response) => {
  const body = req.body;

  res.json({
    msg: 'post API - controller',
    body
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

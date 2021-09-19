const Role = require('../models/role');
const User = require('../models/user');

const validRole = async (role = '') => {
  const roleExists = await Role.findOne({ role });
  if (!roleExists) {
    throw new Error(`The ${role} role is not registered`);
  }
}

//validate the email
const emailExists = async (email = '') => {
  // const { email } = req.body;
  const data = await User.findOne({ email });
  if (data) {
    throw new Error(`The ${email} email exists already`);
  }
}

const idUserExists = async (id = '') => {
  const data = await User.findById( id );
  if (!data) {
    throw new Error(`The mongo ${id} does not exists`);
  }
}

module.exports = {
  validRole,
  emailExists,
  idUserExists,
}
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

module.exports = {
  validRole,
  emailExists,
}
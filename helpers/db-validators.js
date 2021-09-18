const Role = require('../models/role');

const validRole = async (role) => {
  const roleExists = await Role.findOne({ role });
  if (!roleExists) {
    throw new Error(`The ${role} role is not registered`);
  }
}

module.exports = {
  validRole,
}
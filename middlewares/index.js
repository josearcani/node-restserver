const jwtValidator = require('./validate-jwt');
const fieldsValidator = require('./validate-fields');
const rolesValidator = require('./validate-roles');

module.exports = {
  ...jwtValidator,
  ...fieldsValidator,
  ...rolesValidator,
}
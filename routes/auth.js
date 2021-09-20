const router = require('express').Router();
const { check } = require('express-validator');
const { login } = require('../controllers/auth');

const { validateFields } = require('../middlewares/validate-fields');



router.get('/', (req, res) => {
  res.json({
    msg: 'get jwt'
  })
});

router.post('/login', [
  check('email', 'An email is required').isEmail(),
  check('password', 'The password is required').notEmpty(),
  validateFields
], login);


module.exports = router;

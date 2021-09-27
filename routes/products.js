const router = require('express').Router();
const { body, check, param } = require('express-validator');

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products');

const { idProductExists, productExits, categoryExists } = require('../helpers/db-validators');

const { validateFields, validateJWT } = require('../middlewares');

router.get('/', getProducts)

router.get('/:id', [
  param('id', 'it is not a avalid Id').isMongoId(),
  check('id').custom(idProductExists),
  validateFields
], getProduct)

router.post('/', [
  validateJWT,
  body('name', 'A name is required').not().isEmpty(),
  body('name').custom(productExits),
  body('category', 'It is not a valod mongo id').isMongoId(),
  body('category').custom(categoryExists),  
  validateFields
], createProduct)

router.put('/:id', [

], updateProduct)

router.delete('/:id', [

], deleteProduct)

module.exports = router;
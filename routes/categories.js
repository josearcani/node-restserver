const router = require('express').Router();
const { check, body } = require('express-validator');

const { createCategory } = require('../controllers/categories');

const { validateJWT, validateFields } = require('../middlewares');

// Get all categories
router.get('/', (req, res) => {
  res.json({
    msg: 'all categories'
  })
})

// Get a single category
router.get('/:id', (req, res) => {
  res.json('get a category')
})

// Create a category - token
router.post('/', [
  validateJWT,
  body('name', 'A name is required').not().isEmpty(),
  validateFields
], createCategory)

// Update a category
router.put('/:id', (req, res) => {
  res.json('update a category')
})

// Delete a category
router.delete('/:id', (req, res) => {
  res.json('delete a category')
})

module.exports = router;
const router = require('express').Router();
const { check } = require('express-validator');

const { validateFields, validateFile } = require('../middlewares');

const { uploadFile, updateImage } = require('../controllers/uploads');

const { allowedCollections } = require('../helpers');

router.post('/', validateFile, uploadFile);

// update images
router.put('/:collection/:id',[
  validateFile,
  check('id', 'Need to be a MongoId').isMongoId(),
  check('collection').custom(c => allowedCollections(c, ['users', 'products'])),
  validateFields
], updateImage)

module.exports = router;

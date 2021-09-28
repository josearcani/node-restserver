const router = require('express').Router();
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');

const { uploadFile } = require('../controllers/uploads');

router.post('/', uploadFile);

module.exports = router;

const router = require('express').Router();

const { search } = require('../controllers');

router.get('/:product/:term', search)


module.exports = router;
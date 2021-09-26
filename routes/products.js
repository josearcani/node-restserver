const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('hello product');
})


module.exports = router;
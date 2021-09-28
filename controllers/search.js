const { response } = require("express")

const search = (req, res = response) => {

  const {product, term} = req.params;

  res.json({
    msg: 'Search....',
    product,
    term
  })
}

module.exports = {
  search,
}
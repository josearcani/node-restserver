const { response } = require("express");
const { Product, Category } = require('../models');

// get products
const getProducts = async (req, res = response) => {
  res.json('get all')
}

// get product
const getProduct = async (req, res = response) => {
  res.json('get a product')

}

// create product
const createProduct = async (req, res = response) => {
  
  const {
    state,
    user,
    available,
    price = 0,
    description = '',
  } = req.body;

  const name     = req.body.name.toUpperCase();
  const category = req.body.category.toUpperCase();

  const categoryDB = await Category.findOne({ category })

  const data = {
    name,
    user: req.user._id,
    category: categoryDB._id,
    price,
    description,
  }

  const product = new Product(data);

  await product.save();

  res.json(product);

}

// update product
const updateProduct = async (req, res = response) => {
  res.json('update a product')

}

// delete product
const deleteProduct = async (req, res = response) => {
  res.json('delete a product')

}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
}
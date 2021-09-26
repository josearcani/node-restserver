const { response } = require("express");
const { Category } = require("../models");

// get categories
const getCategories = (req, res = response) => {

}

// get category
const getCategory = (req, res = response) => {

}

// create category
const createCategory = async (req, res = response) => {

  const name = req.body.name.toUpperCase();

  const categoryDB = await Category.findOne({ name });

  if (categoryDB) {
    res.status(400).json({
      msg: `The category ${name} exists already`
    })
  }

  const data = {
    name,
    user: req.user._id,
  }

  const category = new Category( data )

  await category.save();

  res.status(201).json(category);
}

// update category
const updateCategory = (req, res = response) => {

}
// delete category
const deleteCategory = (req, res = response) => {

}
module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
}
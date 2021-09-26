const { Schema, model } = require('mongoose');

const categorySchema = Schema({
  name: {
    type: String,
    require: [true, 'A name forthe category is required'],
    unique: true,
  },
  state: {
    type: Boolean,
    default: true,
    require: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    require: true,
  }

})

module.exports = model('Category', categorySchema)
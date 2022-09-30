const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todosSchema = new Schema({
  title: String,
  description: String,
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Todos', todosSchema)
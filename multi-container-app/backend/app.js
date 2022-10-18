const express = require('express')
const cors = require('cors')

const Todos = require('./models/todos.model')

const app = express()

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}))

app.get('/todos', async (req, res, next) => {
  const todos = await Todos.find({})
  return res.send(todos)
})

app.post('/todos', async (req, res, next) => {
  const newTodo = await Todos.create(req.body)
  return res.send(newTodo)
})

app.delete('/todos/:todoId', async (req, res, next) => {
  const deletedTodo = await Todos.findByIdAndDelete(req.params.todoId)
  return res.send(deletedTodo)
})

module.exports = app 
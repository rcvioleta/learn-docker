const express = require('express')

const Todos = require('./models/todos.model')

const app = express()

app.use(express.json())

app.get('/todos', async (req, res, next) => {
  // return res.send("You made it to the /GET route!")
  const todos = await Todos.find({})
  return res.send(todos)
})

app.post('/todos', async (req, res, next) => {
  const newTodo = await Todos.create({
    title: "Learn Docker",
    description: "This is a top priority!"
  })
  return res.send(newTodo)
})

app.delete('/todos/:todoId', async (req, res, next) => {
  await Todos.findByIdAndDelete({ _id: req.params.todoId })
})

module.exports = app 
const express = require('express')

const app = express()

app.use(express.json())

app.get('/todos', (req, res, next) => {
  return res.send("You've reached the /GET endpoint of todos")
})

app.post('/todos', (req, res, next) => {
  return res.send("You've reached the /POST endpoint of todos")
})

module.exports = app 
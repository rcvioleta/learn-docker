const http = require('http')
const mongoose = require('mongoose')

const app = require('./app')

const PORT = process.env.PORT ?? 8000

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

mongoose.connect('mongodb://mongodb-container-v2:27071/todos')
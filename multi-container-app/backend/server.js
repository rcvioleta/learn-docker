const http = require('http')
const mongoose = require('mongoose')

const app = require('./app')

const PORT = process.env.PORT ?? 8000

const server = http.createServer(app)

!(async () => {
  await mongoose.connect('mongodb://host.docker.internal:27071/todos')

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})()

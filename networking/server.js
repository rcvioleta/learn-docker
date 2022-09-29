const express = require("express")
const mongoose = require("mongoose")

const FavsModel = require("./models/favorites.model")

const app = express()

const PORT = process.env.PORT ?? 3000

app.use(express.json())

app.get('/favorites', async (req, res, next) => {
  const favorites = await FavsModel.find({})
  return res.send(favorites)
})

app.post('/favorites', async (req, res, next) => {
  const newFav = await FavsModel.create(req.body)
  return res.send(newFav)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

mongoose.connect("mongodb://mongodb-container:27017/favorites")
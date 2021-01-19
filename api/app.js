const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const morgan = require("morgan")
const cors = require("cors")

const names = require("./resources/names")

const errorHandler = (error, req, res, next) => {
  console.error(error.message)
  next(error)
}

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" })
}

app.use(cors)
app.use(express.static("build"))
app.use(bodyParser.json())

morgan.token("datalogger", (req, res) => {
  return JSON.stringify(req.body)
})

app.use(morgan(":method :url :response-time ms :datalogger"))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>")
})

app.get("/api", (req, res) => {
  res.json(JSON.parse(names))
})

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app

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

app.use(cors())
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

app.get("/api", (req, res) => {
  const numericallySortedNames = names.sort((a, b) =>
    a.amount > b.amount ? -1 : 1
  )
  res.json(numericallySortedNames)
})

app.get("/api/:name", (req, res) => {
  const name = req.params.name
  let amount = 0
  console.log(name)

  //if an entry in the list corresponding to the given name
  //is found, get it's associated amount and return it
  amount = names.find(
    (entry) => entry.name === name || entry.name.toLowerCase() === name
  ).amount
  console.log(amount)
  res.json(amount)
})

app.get("/api/alphabeticalOrder", (req, res) => {
  const alphabeticallySortedNames = names.sort((a, b) =>
    a.name < b.name ? -1 : 1
  )
  res.json(alphabeticallySortedNames)
})

app.get("/api/amount/total", (req, res) => {
  const accumulatedNamecount = names.reduce(
    (accumulated, current) => accumulated + current.amount,
    0
  )
  res.json(accumulatedNamecount)
})

app.get("/api/amount/unique", (req, res) => {
  res.json(names.length)
})

app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app

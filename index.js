const express = require('express')
const cors = require('cors')

const quotes = require("./quotes.json");

const app = express()
app.use(cors())

app.listen(process.env.PORT || 3000)

app.use(express.static('public'))

app.get('/quotes', (req, res) => res.send(quotes))

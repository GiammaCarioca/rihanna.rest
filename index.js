const express = require('express')
const cors = require('cors')

const quotesRouter = require('./src/routes/quotes.routes')

const app = express()

const corsOptions = {
  "methods": "GET",
}

app.use(cors(corsOptions))
app.use(express.static('public'))
app.use('/quotes', quotesRouter)

app.listen(process.env.PORT || 3000)

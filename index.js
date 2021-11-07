const express = require('express')
const cors = require('cors')

const quotesRouter = require('./src/routes/quotes.routes')

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use('/quotes', quotesRouter)

app.listen(process.env.PORT || 3000)

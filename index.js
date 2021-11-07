const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

const quotesRouter = require('./src/routes/quotes.routes')

const app = express()

const corsOptions = {
  'methods': 'GET',
}

const requestLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000,
  max: 100,
  message: 'You have exceeded the 100 requests in 24 hrs limit!', 
  headers: true,
})

app.use(cors(corsOptions))
app.use(requestLimiter)
app.use(express.static('public'))
app.use('/quotes', quotesRouter)

app.listen(process.env.PORT || 3000)

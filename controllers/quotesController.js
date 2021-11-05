const quotes = require('../quotes.json')

function getRandomQuote(req, res, next) {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length)
  res.json({
    quote: quotes[randomQuoteIndex]
  })
}

function getAllQuotes(req, res, next) {
  res.json({
    quotes: quotes
  })
}

module.exports = {
  getRandomQuote: getRandomQuote,
  getAllQuotes: getAllQuotes
}

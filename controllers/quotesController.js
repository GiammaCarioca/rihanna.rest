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

function searchQuotes(req, res, next) {
  const term = req.params.term

  const regExp = new RegExp(term, 'i')

  const foundQuotes  = quotes.filter(quote => quote && quote.match(regExp))

  res.send(foundQuotes.length !== 0 ? foundQuotes : `Term Not Found: ${term}`)
}

module.exports = {
  getRandomQuote: getRandomQuote,
  getAllQuotes: getAllQuotes,
  searchQuotes: searchQuotes,
}

const quotes = require('../../quotes.json')

const getUniqueRange = require('../utils/getUniqueRange')

function getRandomQuotes(req, res, next) {
  const count = req.params.count

  const randomQuotes = getUniqueRange(parseInt(count)).map(item => quotes[item])

  const name = randomQuotes.length == 1 ? "quote" : "quotes"

  res.json({
    [name]: randomQuotes
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
  getRandomQuotes: getRandomQuotes,
  getAllQuotes: getAllQuotes,
  searchQuotes: searchQuotes,
}

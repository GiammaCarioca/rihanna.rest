const quotes = require('../../quotes.json')

const getUniqueRange = require('../utils/getUniqueRange')

function getRandomQuotes(req, res) {
  const count = req.params.count

  if (parseInt(count) > quotes.length) {
    res.send(`Sorry, we got only ${quotes.length} quotes for the time being.`)
    return
  }

  const randomQuotes = getUniqueRange(parseInt(count), quotes.length).map(item => quotes[item])

  res.json(randomQuotes)
}

function getAllQuotes(req, res) {
  res.json(quotes)
}

function searchQuotes(req, res) {
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

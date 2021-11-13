const quotes = require('../quotes.json');

const getUniqueRange = require('../utils/getUniqueRange');
const convertCount = require('../utils/convertCount');

function getRandomQuotes(req, res) {
  const count = convertCount(req.params.count);

  if (!!count && count > quotes.length) {
    res.send(`Sorry, we got only ${quotes.length} quotes for the time being.`);
  }

  const randomQuotes = getUniqueRange(count, quotes.length).map((item) => quotes[item]);

  res.json(randomQuotes);
}

function getAllQuotes(req, res) {
  res.json(quotes);
}

function searchQuotes(req, res) {
  const { term } = req.params;

  const regExp = new RegExp(`\\b${term}\\b`, 'i');

  const foundQuotes = quotes.filter((quote) => quote && quote.match(regExp));

  res.send(foundQuotes.length !== 0 ? foundQuotes : `Term Not Found: ${term}`);
}

module.exports = {
  getRandomQuotes,
  getAllQuotes,
  searchQuotes,
};

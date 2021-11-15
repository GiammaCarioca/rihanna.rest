"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _quotes = _interopRequireDefault(require("../quotes.json"));

var _getUniqueRange = _interopRequireDefault(require("../utils/getUniqueRange"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRandomQuotes(req, res) {
  const {
    count = 1
  } = req.params;
  const numOfQuotes = Number(count);
  const randomQuotes = [];
  if (Number.isNaN(numOfQuotes) || typeof count === 'undefined') return res.send('Please insert a valid number.');

  if (numOfQuotes > _quotes.default.length) {
    return res.send(`Sorry, we got only ${_quotes.default.length} quotes for the time being.`);
  }

  randomQuotes.push(...(0, _getUniqueRange.default)(numOfQuotes).map(item => _quotes.default[item]));
  return res.json(randomQuotes);
}

function getAllQuotes(req, res) {
  res.json(_quotes.default);
}

function searchQuotes(req, res) {
  const {
    term
  } = req.params;
  const regExp = new RegExp(`\\b${term}\\b`, 'i');

  const foundQuotes = _quotes.default.filter(quote => quote && quote.match(regExp));

  res.send(foundQuotes.length !== 0 ? foundQuotes : `Term Not Found: ${term}`);
}

var _default = {
  getRandomQuotes,
  getAllQuotes,
  searchQuotes
};
exports.default = _default;
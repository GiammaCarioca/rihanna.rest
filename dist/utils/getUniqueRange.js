"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _quotes = _interopRequireDefault(require("../quotes.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getUniqueRange = (count, max = _quotes.default.length) => {
  const randomQuoteIndexes = [];

  if (count <= max) {
    while (randomQuoteIndexes.length < count) {
      const randomQuoteIndex = Math.floor(Math.random() * _quotes.default.length);
      randomQuoteIndexes.push(randomQuoteIndex);
    }
  }

  return randomQuoteIndexes;
};

var _default = getUniqueRange;
exports.default = _default;
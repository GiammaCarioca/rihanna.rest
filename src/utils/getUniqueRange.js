const quotes = require('../quotes.json');

const getUniqueRange = (count, max = quotes.length) => {
  const randomQuoteIndexes = [];

  if (isNaN(count)) {
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    return [randomQuoteIndex];
  }

  if (count && count <= max) {
    while (randomQuoteIndexes.length < count) {
      const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

      randomQuoteIndexes.includes(randomQuoteIndex) ? '' : randomQuoteIndexes.push(randomQuoteIndex);
    }
  }
  return randomQuoteIndexes;
};

module.exports = getUniqueRange;

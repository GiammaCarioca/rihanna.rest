import quotes from '../quotes.json';

const getUniqueRange = (count: number, max: number = quotes.length): number[] => {
  const randomQuoteIndexes = [];

  if (count <= max)
  {
    while (randomQuoteIndexes.length < count)
    {
      const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

      randomQuoteIndexes.push(randomQuoteIndex);
    }
  }
  return randomQuoteIndexes;
};

export default getUniqueRange;

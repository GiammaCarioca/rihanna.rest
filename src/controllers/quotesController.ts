import { Request, Response } from 'express';
import quotes from '../quotes.json';

import getUniqueRange from '../utils/getUniqueRange';

function getRandomQuotes(req: Request, res: Response) {
  let randomQuotes = [];

  const input = req.params.count;

  if (typeof input === 'undefined')
  {
    randomQuotes = getUniqueRange(1).map((item) => quotes[item]);
    return res.json(randomQuotes);
  }

  if (Number.isNaN(Number(input))) return res.send('Please insert a valid number.');

  if (Number(input) > quotes.length)
  {
    return res.send(`Sorry, we got only ${quotes.length} quotes for the time being.`);
  }

  randomQuotes = getUniqueRange(Number(input)).map((item) => quotes[item]);
  return res.json(randomQuotes);
}

function getAllQuotes(req: Request, res: Response) {
  res.json(quotes);
}

function searchQuotes(req: Request, res: Response) {
  const { term } = req.params;

  const regExp = new RegExp(`\\b${term}\\b`, 'i');

  const foundQuotes = quotes.filter((quote) => quote && quote.match(regExp));

  res.send(foundQuotes.length !== 0 ? foundQuotes : `Term Not Found: ${term}`);
}

export default {
  getRandomQuotes,
  getAllQuotes,
  searchQuotes,
};

import { Request, Response } from 'express';
import quotes from '../quotes.json';

import getUniqueRange from '../utils/getUniqueRange';

function getRandomQuotes(req: Request, res: Response) {
  const { count = 1 } = req.params;
  const numOfQuotes = Number(count);
  const randomQuotes = [];

  if (Number.isNaN(numOfQuotes) || typeof count === 'undefined') return res.send('Please insert a valid number.');

  if (numOfQuotes > quotes.length)
  {
    return res.send(`Sorry, we got only ${quotes.length} quotes for the time being.`);
  }

  randomQuotes.push(...getUniqueRange(numOfQuotes).map((item) => quotes[item]));
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

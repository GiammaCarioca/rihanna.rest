import express from 'express';
import quotesController from '../controllers/quotesController';

const router = express.Router();

router.get('/all', quotesController.getAllQuotes);
router.get('/:count?', quotesController.getRandomQuotes);
router.get('/search/:term', quotesController.searchQuotes);
router.get('/', quotesController.getRandomQuotes);

export default router;

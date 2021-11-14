import { Router } from 'express'

import { getAllQuotes, getRandomQuotes, searchQuotes } from '../controllers/quotesController'

const router = Router()

router.get('/all', getAllQuotes)
router.get('/:count?', getRandomQuotes)
router.get('/search/:term', searchQuotes)
router.get('/', getRandomQuotes)

export default router

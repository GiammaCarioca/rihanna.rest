"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _quotesController = require("../controllers/quotesController");

const router = (0, _express.Router)();
router.get('/all', _quotesController.getAllQuotes);
router.get('/:count?', _quotesController.getRandomQuotes);
router.get('/search/:term', _quotesController.searchQuotes);
router.get('/', _quotesController.getRandomQuotes);
var _default = router;
exports.default = _default;
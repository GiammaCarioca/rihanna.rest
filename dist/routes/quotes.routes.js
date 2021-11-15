"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _quotesController = _interopRequireDefault(require("../controllers/quotesController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get('/all', _quotesController.default.getAllQuotes);
router.get('/:count?', _quotesController.default.getRandomQuotes);
router.get('/search/:term', _quotesController.default.searchQuotes);
router.get('/', _quotesController.default.getRandomQuotes);
var _default = router;
exports.default = _default;
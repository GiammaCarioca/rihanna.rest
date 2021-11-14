"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

var _quotes = _interopRequireDefault(require("./routes/quotes.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const corsOptions = {
  methods: 'GET'
};
const requestLimiter = (0, _expressRateLimit.default)({
  windowMs: 24 * 60 * 60 * 1000,
  max: 100,
  message: 'You have exceeded the 100 requests in 24 hrs limit!',
  headers: true
});
app.use((0, _cors.default)(corsOptions));
app.use(requestLimiter);
app.use(_express.default.static('public'));
app.use('/quotes', _quotes.default);
app.listen(process.env.PORT || 3000);
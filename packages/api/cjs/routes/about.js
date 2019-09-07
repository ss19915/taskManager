"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _db = require("@react-web-app/db");

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/about', function (req, res, next) {
  res.send('Use src/routes to add routes, use src/middleware to add middlewares like auth, and use repository to expose API endpoint methods');
  next();
});
router.get('/aboutDb', function (req, res, next) {
  res.send((0, _db.aboutDbPackage)());
  next();
});
var _default = router;
exports["default"] = _default;
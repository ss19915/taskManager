"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var middliwawre = _express["default"].Router();

middliwawre.use(_express["default"].json());
var _default = middliwawre;
exports["default"] = _default;
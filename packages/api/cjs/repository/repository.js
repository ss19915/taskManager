"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApiDetails = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var API_URL = "".concat(process.env.API_URL, ":").concat(process.env.API_PORT);

var getApiDetails = _axios["default"].get("".concat(API_URL, "/about"));

exports.getApiDetails = getApiDetails;
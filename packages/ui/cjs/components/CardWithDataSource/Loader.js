"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _theme = require("@react-web-app/theme");

var _Compact = _interopRequireDefault(require("./Compact"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Loader = function Loader(props) {
  var _props$compact = props.compact,
      compact = _props$compact === void 0 ? true : _props$compact;
  return _react["default"].createElement(_Compact["default"], {
    compact: compact
  }, _react["default"].createElement(_theme.CircularProgress, null));
};

Loader.propTypes = {
  compact: _propTypes["default"].bool
};
var _default = Loader;
exports["default"] = _default;
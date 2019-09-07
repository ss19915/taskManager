"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _theme = require("@react-web-app/theme");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Compact = function Compact(props) {
  var children = props.children,
      compact = props.compact,
      label = props.label;

  if (compact) {
    return children;
  } else if (label) {
    return _react["default"].createElement(_theme.Paper, {
      basic: true
    }, _react["default"].createElement(_theme.Paper, null, label, _react["default"].createElement(_theme.Paper, {
      basic: true
    }, children)));
  }

  return _react["default"].createElement(_theme.Paper, {
    basic: true
  }, _react["default"].createElement(_theme.Paper, null, children));
};

Compact.propTypes = {
  children: _propTypes["default"].node,
  compact: _propTypes["default"].bool,
  label: _propTypes["default"].node
};
var _default = Compact;
exports["default"] = _default;
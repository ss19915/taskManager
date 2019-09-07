"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var childWithProps = function childWithProps(child, props, key) {
  if (typeof child === 'string' | typeof child === 'number') {
    return child;
  }

  return _react["default"].cloneElement(child, _objectSpread({
    key: key
  }, props));
};

var ShowChildren = function ShowChildren(props) {
  var children = props.children,
      childrenProps = props.childrenProps;

  if (!children) {
    return null;
  }

  if (Array.isArray(children)) {
    return children.map(function (child, index) {
      return childWithProps(child, childrenProps, index);
    });
  }

  return childWithProps(children, childrenProps);
};

ShowChildren.propTypes = {
  children: _propTypes["default"].node,
  childrenProps: _propTypes["default"].object
};
var _default = ShowChildren;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _constants = require("./constants");

var _theme = require("@react-web-app/theme");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ErrorMenu =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(ErrorMenu, _React$PureComponent);

  function ErrorMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ErrorMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ErrorMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      showError: false
    });

    _defineProperty(_assertThisInitialized(_this), "toggleShowError", function () {
      return _this.setState(function (prevState) {
        return {
          showError: !prevState.showError
        };
      });
    });

    return _this;
  }

  _createClass(ErrorMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          retry = _this$props.retry,
          status = _this$props.status,
          error = _this$props.error;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_theme.Button, {
        onClick: retry,
        disabled: status === _constants.Status.LOADING
      }, _constants.ErrorMenuLabels.RETRY), _react["default"].createElement(_theme.Button, {
        onClick: this.toggleShowError
      }, this.state.showError ? _constants.ErrorMenuLabels.HIDE_ERROR : _constants.ErrorMenuLabels.SHOW_ERROR), this.state.showError && _react["default"].createElement(_theme.Paper, {
        css: function css(theme) {
          return {
            color: theme.warningColor
          };
        }
      }, "Error: ".concat(JSON.stringify(error))));
    }
  }]);

  return ErrorMenu;
}(_react["default"].PureComponent);

_defineProperty(ErrorMenu, "propTypes", {
  retry: _propTypes["default"].func,
  status: _propTypes["default"].oneOf(Object.values(_constants.Status)),
  error: _propTypes["default"].object
});

var _default = ErrorMenu;
exports["default"] = _default;
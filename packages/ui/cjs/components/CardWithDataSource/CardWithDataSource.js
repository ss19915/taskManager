"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _constants = require("./constants");

var _ErrorMenu = _interopRequireDefault(require("./ErrorMenu"));

var _Loader = _interopRequireDefault(require("./Loader"));

var _Compact = _interopRequireDefault(require("./Compact"));

var _ShowChildren = _interopRequireDefault(require("./ShowChildren"));

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

//[Note]: compact hides label too
var CardWithDataSource =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(CardWithDataSource, _React$PureComponent);

  function CardWithDataSource(props) {
    var _this;

    _classCallCheck(this, CardWithDataSource);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardWithDataSource).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "callAPI", function () {
      var _this$props = _this.props,
          apiCallMethod = _this$props.apiCallMethod,
          _this$props$processRe = _this$props.processResponse,
          processResponse = _this$props$processRe === void 0 ? function (r) {
        return r;
      } : _this$props$processRe,
          skip = _this$props.skip;

      if (skip) {
        return;
      }

      var payload = _this.state.payload;

      var onSuccess = function onSuccess(_ref) {
        var data = _ref.data;
        return _this.setState({
          apiResponse: processResponse(data),
          status: _constants.Status.LOADED
        });
      };

      var onError = function onError(_ref2) {
        var response = _ref2.response;
        return _this.setState({
          error: response,
          status: _constants.Status.ERROR
        });
      };

      _this.setState({
        status: _constants.Status.LOADING
      });

      apiCallMethod(payload).then(onSuccess)["catch"](onError);
    });

    _defineProperty(_assertThisInitialized(_this), "retry", function () {
      _this.callAPI();
    });

    var _payload = props.payload;
    _this.state = {
      payload: _payload,
      status: _constants.Status.LOADED,
      apiResponse: {},
      error: ''
    };
    return _this;
  }

  _createClass(CardWithDataSource, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.callAPI();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!_lodash["default"].isEqual(this.props.payload, this.state.payload)) {
        this.setState({
          payload: this.props.payload
        }, this.callAPI);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          compact = _this$props2.compact,
          label = _this$props2.label;
      var _this$state = this.state,
          status = _this$state.status,
          apiResponse = _this$state.apiResponse,
          error = _this$state.error;
      return _react["default"].createElement(_Compact["default"], {
        label: label,
        compact: compact
      }, status === _constants.Status.LOADED && _react["default"].createElement(_ShowChildren["default"], {
        children: children,
        childrenProps: apiResponse
      }), status === _constants.Status.LOADING && _react["default"].createElement(_Loader["default"], {
        compact: !compact
      }), status === _constants.Status.ERROR && _react["default"].createElement(_ErrorMenu["default"], {
        retry: this.retry,
        status: status,
        error: error
      }));
    }
  }]);

  return CardWithDataSource;
}(_react["default"].PureComponent);

_defineProperty(CardWithDataSource, "propTypes", {
  payload: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string, _propTypes["default"].number]),
  apiCallMethod: _propTypes["default"].func,
  processResponse: _propTypes["default"].func,
  skip: _propTypes["default"].bool,
  //skip API Call
  compact: _propTypes["default"].bool,
  // removed outer border and makes component small
  label: _propTypes["default"].node //card header

});

var _default = CardWithDataSource;
exports["default"] = _default;
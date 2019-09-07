"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

var _middleware = _interopRequireDefault(require("./middleware"));

var _db = require("@react-web-app/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var appPort = process.env.API_PORT || 8081;
var app = (0, _express["default"])();
app.use([_middleware["default"], _routes["default"]]);
app.listen(appPort, function () {
  console.log("Server runnign on Port ".concat(appPort));
});
(0, _db.connectDb)();
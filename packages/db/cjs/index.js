"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDb = exports.aboutDbPackage = void 0;

var aboutDbPackage = function aboutDbPackage() {
  return 'Use this package to create an abstraction between API and database methods';
};

exports.aboutDbPackage = aboutDbPackage;

var connectDb = function connectDb() {
  console.log('modify connectDB method to connect to db');
};

exports.connectDb = connectDb;
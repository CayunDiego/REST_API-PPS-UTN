"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var generateToken = function generateToken(user) {
  return _jsonwebtoken["default"].sign({
    user: user
  }, _config.JWT_SECRET, {
    expiresIn: '24h'
  });
};

exports.generateToken = generateToken;

var verifyToken = function verifyToken(token) {
  return _jsonwebtoken["default"].verify(token, _config.JWT_SECRET);
};

exports.verifyToken = verifyToken;
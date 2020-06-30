"use strict";

var _notFound = _interopRequireDefault(require("./not-found.middleware"));

var _verifyToken = _interopRequireDefault(require("./verifyToken.middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  NotFoundMiddleware: _notFound["default"],
  verifyTokenMiddleware: _verifyToken["default"]
};
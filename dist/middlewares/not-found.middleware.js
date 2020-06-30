"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var notFoundMiddleware = function notFoundMiddleware(req, res, next) {
  return res.status(404).send({
    status: 404,
    message: "Resource not found"
  });
};

var _default = notFoundMiddleware;
exports["default"] = _default;
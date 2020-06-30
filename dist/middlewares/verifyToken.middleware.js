"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jwt = require("../helpers/jwt.helper");

var verifyTokenM = function verifyTokenM(req, res, next) {
  var token = req.headers['x-access-token'];

  if (!token) {
    return res.status(404).json({
      auth: false,
      message: "No token provided"
    });
  }

  var decoded = (0, _jwt.verifyToken)(token);
  console.log('entra al verificador de token');
  next();
};

var _default = verifyTokenM;
exports["default"] = _default;
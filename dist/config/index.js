"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (process.env.NODE_ENV !== "production") {
  _dotenv["default"].config();
}

module.exports = {
  NOMBRE: process.env.BD_NOMBRE,
  USER: process.env.BD_USER,
  PASS: process.env.BD_PASS,
  HOST: process.env.BD_HOST || '0.0.0.0',
  BD_PORT: process.env.BD_PORT,
  PORT: process.env.PORT || 4000,
  JWT_SECRET: process.env.JWT_SECRET,
  SWAGGER_PATH: "./config/swagger/".concat(process.env.SWAGGER_DOC)
};
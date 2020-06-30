"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../config/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//USERS MODEL
var UserAdmin = _database.sequelize.define('USERS_ADMIN', {
  ID_U: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  USER_NAME: {
    type: _sequelize["default"].STRING
  },
  E_MAIL: {
    type: _sequelize["default"].STRING
  },
  PASSWORD: {
    type: _sequelize["default"].STRING
  }
});

var _default = UserAdmin;
exports["default"] = _default;
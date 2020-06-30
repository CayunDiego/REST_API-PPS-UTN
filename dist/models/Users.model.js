"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../config/database");

var _Complaints = _interopRequireDefault(require("./Complaints.model"));

var _Comments = _interopRequireDefault(require("./Comments.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//TABLE CON EL FOREIGN KEY
//USERS MODEL
var Users = _database.sequelize.define('USERS', {
  ID_U: {
    type: _sequelize["default"].STRING,
    primaryKey: true
  },
  DISPLAY_NAME: {
    type: _sequelize["default"].STRING
  },
  FIRST_NAME: {
    type: _sequelize["default"].STRING
  },
  LAST_NAME: {
    type: _sequelize["default"].STRING
  },
  DOCUMENT: {
    type: _sequelize["default"].INTEGER
  },
  PHOTO_URL: {
    type: _sequelize["default"].STRING
  }
});

Users.hasMany(_Complaints["default"], {
  foreignKey: 'ID_U',
  sourceKey: 'ID_U'
});

_Complaints["default"].belongsTo(Users, {
  foreignKey: 'ID_U',
  sourceKey: 'ID_U'
});

Users.hasMany(_Comments["default"], {
  foreignKey: 'ID_U',
  sourceKey: 'ID_U'
});

_Comments["default"].belongsTo(Users, {
  foreignKey: 'ID_U',
  sourceKey: 'ID_U'
});

var _default = Users;
exports["default"] = _default;
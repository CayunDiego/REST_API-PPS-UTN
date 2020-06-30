"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../config/database");

var _Comments = _interopRequireDefault(require("./Comments.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//TABLE CON EL FOREIGN KEY
//COMPLAINTS MODEL
var Complaints = _database.sequelize.define('COMPLAINTS', {
  ID: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  CREATE_AT: {
    type: _sequelize["default"].DATE
  },
  DESCRIPTION: {
    type: _sequelize["default"].STRING
  },
  ADDRESS: {
    type: _sequelize["default"].STRING
  },
  LAT: {
    type: _sequelize["default"].DOUBLE
  },
  LNG: {
    type: _sequelize["default"].DOUBLE
  },
  PHOTO_URL: {
    type: _sequelize["default"].STRING
  },
  ID_TYPE: {
    type: _sequelize["default"].INTEGER
  },
  VOTE: {
    type: _sequelize["default"].INTEGER
  },
  ID_U: {
    type: _sequelize["default"].STRING
  },
  STATE: {
    type: _sequelize["default"].STRING
  }
}); //VER SI ESTAN BIEN LAS ID


Complaints.hasMany(_Comments["default"], {
  foreignKey: 'ID_COMPLAINT',
  sourceKey: 'ID'
});

_Comments["default"].belongsTo(Complaints, {
  foreignKey: 'ID_COMPLAINT',
  sourceKey: 'ID'
});

var _default = Complaints;
exports["default"] = _default;
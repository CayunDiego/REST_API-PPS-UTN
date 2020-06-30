"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../config/database");

var _Complaints = _interopRequireDefault(require("./Complaints.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//TYPE WORK MODEL   type_work
var TypeWork = _database.sequelize.define('TYPE_WORK', {
  ID_TYPE: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  TYPE: {
    type: _sequelize["default"].STRING
  },
  COLOR: {
    type: _sequelize["default"].STRING
  }
});

TypeWork.hasMany(_Complaints["default"], {
  foreignKey: 'ID_TYPE',
  sourceKey: 'ID_TYPE'
});

_Complaints["default"].belongsTo(TypeWork, {
  foreignKey: 'ID_TYPE',
  sourceKey: 'ID_TYPE'
});

var _default = TypeWork;
exports["default"] = _default;
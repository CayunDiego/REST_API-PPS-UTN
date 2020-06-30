"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../config/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//COMMENTS MODEL
var Comments = _database.sequelize.define('COMMENTS', {
  ID_C: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  COMMENT: {
    type: _sequelize["default"].STRING
  },
  CREATE_AT: {
    type: _sequelize["default"].DATE
  },
  VOTE: {
    type: _sequelize["default"].INTEGER
  },
  ID_COMPLAINT: {
    type: _sequelize["default"].INTEGER
  },
  ID_U: {
    type: _sequelize["default"].STRING
  }
});

var _default = Comments;
exports["default"] = _default;
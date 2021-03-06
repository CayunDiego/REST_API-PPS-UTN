"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../config/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//COMMENTS MODEL
var VotesComment = _database.sequelize.define('VOTES_COMMENTS', {
  ID_VOTE: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  ID_U: {
    type: _sequelize["default"].STRING
  },
  ID_C: {
    type: _sequelize["default"].INTEGER
  }
});

var _default = VotesComment;
exports["default"] = _default;
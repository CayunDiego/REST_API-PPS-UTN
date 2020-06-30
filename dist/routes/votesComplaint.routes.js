"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _VotesComplaint = require("../controllers/VotesComplaint.controller");

var router = (0, _express.Router)();
//  /api/v1/votescomplaint
router.post('/', _VotesComplaint.createVote);
router.get('/:id', _VotesComplaint.getByUser);
var _default = router;
exports["default"] = _default;
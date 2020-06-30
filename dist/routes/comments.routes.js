"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Comments = require("../controllers/Comments.controller");

var router = (0, _express.Router)();
//  /api/v1/comment
router.post('/', _Comments.createComment);
router.get('/', _Comments.getComments);
router.get('/:id', _Comments.getOneComment);
router["delete"]('/:id', _Comments.deleteComment);
router.put('/:id/upvote', _Comments.upVoteComment);
var _default = router;
exports["default"] = _default;
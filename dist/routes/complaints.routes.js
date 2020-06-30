"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _middlewares = require("../middlewares");

var _Complaints = require("../controllers/Complaints.controller");

var router = (0, _express.Router)();
//  /api/v1/complaint
router.post('/', _Complaints.createComplaint);
router.get('/', _Complaints.getComplaints);
router.get('/vote', _Complaints.getComplaintsByVote);
router.get('/:id', _Complaints.getOneComplaint);
router["delete"]('/:id', _Complaints.deleteComplaint);
router.put('/:id/upvote', _Complaints.upVoteComplaint);
router.put('/:id', _middlewares.verifyTokenMiddleware, _Complaints.UpdateState);
var _default = router;
exports["default"] = _default;
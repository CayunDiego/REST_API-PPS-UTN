"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _Auth = require("../service/Auth.service");

var router = (0, _express.Router)();
//  /api/v1/auth
router.post('/signin', _Auth.signin);
router.post('/signup', _Auth.signup); //registro

router.get('/me', _Auth.getMe);
var _default = router;
exports["default"] = _default;
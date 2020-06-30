"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _User = require("../controllers/User.controller");

var router = (0, _express.Router)();
//  /api/v1/user
router.post('/', _User.createUser);
router.get('/', _User.getUsers);
router.get('/:id', _User.getOneUser);
router["delete"]('/:id', _User.deleteUser);
router.put('/:id', _User.updateUser);
var _default = router;
exports["default"] = _default;
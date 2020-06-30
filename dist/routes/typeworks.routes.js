"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _middlewares = require("../middlewares");

var _TypeWork = require("../controllers/TypeWork.controller");

var router = (0, _express.Router)();
//  /api/v1/typework
router.post('/', _middlewares.verifyTokenMiddleware, _TypeWork.createTypeWork);
router.get('/', _TypeWork.getTypeWorks);
router.get('/:id', _TypeWork.getOneTypeWork);
router["delete"]('/:id', _middlewares.verifyTokenMiddleware, _TypeWork.deleteTypeWork);
router.put('/:id', _middlewares.verifyTokenMiddleware, _TypeWork.updateTypeWork);
var _default = router;
exports["default"] = _default;
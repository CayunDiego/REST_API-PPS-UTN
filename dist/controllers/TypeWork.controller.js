"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTypeWork = exports.deleteTypeWork = exports.createTypeWork = exports.getOneTypeWork = exports.getTypeWorks = void 0;

var _TypeWork = _interopRequireDefault(require("../models/TypeWork.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//GET
var getTypeWorks = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var typeworks;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _TypeWork["default"].findAll();

          case 3:
            typeworks = _context.sent;
            return _context.abrupt("return", res.status(200).json({
              data: typeworks || []
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'The request failed.'
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getTypeWorks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //GET -> ID


exports.getTypeWorks = getTypeWorks;

var getOneTypeWork = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, typework;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _TypeWork["default"].findOne({
              where: {
                ID_TYPE: id
              }
            });

          case 4:
            typework = _context2.sent;
            return _context2.abrupt("return", res.status(200).json({
              data: typework || {}
            }));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'The request failed.'
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function getOneTypeWork(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //POST


exports.getOneTypeWork = getOneTypeWork;

var createTypeWork = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, idType, type, color, newTypeWork;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, idType = _req$body.idType, type = _req$body.type, color = _req$body.color;
            _context3.next = 4;
            return _TypeWork["default"].create({
              ID_TYPE: idType,
              TYPE: type,
              COLOR: color
            }, {
              fields: ['ID_TYPE', 'TYPE', 'COLOR'] //le digo los datos que voy a llenar (es como el values)

            });

          case 4:
            newTypeWork = _context3.sent;

            if (!newTypeWork) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(201).json({
              message: 'Type work created successfully',
              data: newTypeWork
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function createTypeWork(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //DELETE


exports.createTypeWork = createTypeWork;

var deleteTypeWork = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _TypeWork["default"].destroy({
              where: {
                ID_TYPE: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.status(200).json({
              message: 'Type work Deleted succesfully',
              count: deleteRowCount
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'The request failed.'
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function deleteTypeWork(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //PUT


exports.deleteTypeWork = deleteTypeWork;

var updateTypeWork = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, type, color, typeworks;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, type = _req$body2.type, color = _req$body2.color;
            _context6.next = 5;
            return _TypeWork["default"].findAll({
              attributes: ['ID_TYPE', 'TYPE', 'COLOR'],
              where: {
                ID_TYPE: id
              }
            });

          case 5:
            typeworks = _context6.sent;

            if (typeworks.length > 0) {
              typeworks.forEach( /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(typework) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return typework.update({
                            TYPE: type,
                            COLOR: color
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref6.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.status(200).json({
              message: 'Type work Updated Successfully',
              data: typeworks
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);
            res.status(500).json({
              message: 'The request failed.'
            });

          case 14:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 10]]);
  }));

  return function updateTypeWork(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateTypeWork = updateTypeWork;
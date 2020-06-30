"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.deleteUser = exports.createUser = exports.getOneUser = exports.getUsers = void 0;

var _Users = _interopRequireDefault(require("../models/Users.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//GET
var getUsers = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Users["default"].findAll();

          case 3:
            users = _context.sent;
            res.status(200).json({
              data: users || []
            });
            _context.next = 11;
            break;

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

  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //GET -> ID


exports.getUsers = getUsers;

var getOneUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _Users["default"].findOne({
              where: {
                ID_U: id
              }
            });

          case 4:
            user = _context2.sent;
            res.status(200).json({
              data: user || {}
            });
            _context2.next = 12;
            break;

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

  return function getOneUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //POST


exports.getOneUser = getOneUser;

var createUser = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, idUser, displayName, firstName, lastName, document, photoURL, newUser;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _req$body = req.body, idUser = _req$body.idUser, displayName = _req$body.displayName, firstName = _req$body.firstName, lastName = _req$body.lastName, document = _req$body.document, photoURL = _req$body.photoURL;
            _context3.next = 4;
            return _Users["default"].create({
              ID_U: idUser,
              DISPLAY_NAME: displayName,
              FIRST_NAME: firstName,
              LAST_NAME: lastName,
              DOCUMENT: document,
              PHOTO_URL: photoURL
            }, {
              fields: ["ID_U", "DISPLAY_NAME", "FIRST_NAME", "LAST_NAME", "DOCUMENT", "PHOTO_URL"]
            });

          case 4:
            newUser = _context3.sent;

            if (!newUser) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.status(201).json({
              message: 'User created successfully',
              data: newUser
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

  return function createUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //DELETE


exports.createUser = createUser;

var deleteUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _Users["default"].destroy({
              where: {
                ID_U: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.status(200).json({
              message: 'User Deleted succesfully',
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

  return function deleteUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //PUT


exports.deleteUser = deleteUser;

var updateUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, displayName, photoURL, users;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, displayName = _req$body2.displayName, photoURL = _req$body2.photoURL;
            _context6.next = 5;
            return _Users["default"].findAll({
              attributes: ["ID_U", "DISPLAY_NAME", "FIRST_NAME", "LAST_NAME", "DOCUMENT", "PHOTO_URL"],
              where: {
                ID_U: id
              }
            });

          case 5:
            users = _context6.sent;

            if (users.length > 0) {
              users.forEach( /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(user) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return user.update({
                            DISPLAY_NAME: displayName,
                            PHOTO_URL: photoURL
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
              message: 'User Updated Successfully',
              data: users
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

  return function updateUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateUser = updateUser;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMe = exports.signin = exports.signup = void 0;

var _UserAdmin = _interopRequireDefault(require("../models/UserAdmin.model"));

var _encrypt = require("../helpers/encrypt.helper");

var _jwt = require("../helpers/jwt.helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//POST
var signup = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, userName, email, password, encyptPass, newUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, userName = _req$body.userName, email = _req$body.email, password = _req$body.password;
            _context.next = 4;
            return (0, _encrypt.encryptPassword)(password);

          case 4:
            encyptPass = _context.sent;
            _context.next = 7;
            return _UserAdmin["default"].create({
              USER_NAME: userName,
              E_MAIL: email,
              PASSWORD: encyptPass
            }, {
              fields: ["USER_NAME", "E_MAIL", "PASSWORD"]
            });

          case 7:
            newUser = _context.sent;

            if (!newUser) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(201).json({
              message: 'User created successfully',
              auth: true
            }));

          case 10:
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              auth: null,
              token: null
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function signup(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); //POST


exports.signup = signup;

var signin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var _req$body2, email, password, user, validPassword, userToEncode, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 4;
            return _UserAdmin["default"].findOne({
              where: {
                E_MAIL: email
              }
            });

          case 4:
            user = _context2.sent;

            if (user) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(404).send("The email doesn't exist"));

          case 7:
            _context2.next = 9;
            return (0, _encrypt.validatePassword)(password, user);

          case 9:
            validPassword = _context2.sent;
            console.log(validPassword);

            if (!validPassword) {
              res.status(401).json({
                auth: false,
                token: null
              });
            }

            console.log(user.ID_U);
            userToEncode = {
              id: user.ID_U,
              userName: user.USER_NAME,
              email: user.E_MAIL
            };
            token = (0, _jwt.generateToken)(userToEncode);
            res.status(200).json({
              auth: true,
              token: token
            });
            _context2.next = 22;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'The request failed.'
            });

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 18]]);
  }));

  return function signin(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;

var getMe = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var token, decoded;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            token = req.headers['x-access-token'];

            if (token) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", res.status(404).json({
              auth: false,
              message: "No token provided"
            }));

          case 3:
            decoded = (0, _jwt.verifyToken)(token);
            console.log(decoded);
            res.json('me');

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getMe(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getMe = getMe;
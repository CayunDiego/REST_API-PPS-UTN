"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createVote = exports.getByUser = void 0;

var _VotesComplaint = _interopRequireDefault(require("../models/VotesComplaint.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//GET -> ID user
var getByUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, votes;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;
            _context.next = 4;
            return _VotesComplaint["default"].findAll({
              attributes: ['ID_COMPLAINT'],
              where: {
                ID_U: id
              },
              order: [['ID_VOTE', 'DESC']]
            });

          case 4:
            votes = _context.sent;
            res.status(200).json({
              data: votes || {}
            });
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'The request failed.'
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function getByUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //POST


exports.getByUser = getByUser;

var createVote = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, id_u, id_c, newVote;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, id_u = _req$body.id_u, id_c = _req$body.id_c;
            _context2.next = 4;
            return _VotesComplaint["default"].create({
              ID_U: id_u,
              ID_COMPLAINT: id_c
            }, {
              fields: ['ID_U', 'ID_COMPLAINT']
            });

          case 4:
            newVote = _context2.sent;

            if (!newVote) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.status(201).json({
              message: 'newVote created successfully',
              data: newVote
            }));

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function createVote(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.createVote = createVote;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateState = exports.upVoteComplaint = exports.deleteComplaint = exports.createComplaint = exports.getComplaintsByVote = exports.getOneComplaint = exports.getComplaints = void 0;

var _Complaints = _interopRequireDefault(require("../models/Complaints.model"));

var _TypeWork = _interopRequireDefault(require("../models/TypeWork.model"));

var _Users = _interopRequireDefault(require("../models/Users.model"));

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Op = _sequelize["default"].Op; //GET

var getComplaints = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var complaints;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            complaints = [];
            _context.prev = 1;
            _context.t0 = Object.keys(req.query)[0];
            _context.next = _context.t0 === 'typework' ? 5 : _context.t0 === 'userid' ? 9 : _context.t0 === 'typeuser' ? 13 : _context.t0 === 'state' ? 17 : _context.t0 === 'lat' ? 21 : _context.t0 === undefined ? 29 : 33;
            break;

          case 5:
            _context.next = 7;
            return searchByTypeWork(req.query.typework);

          case 7:
            complaints = _context.sent;
            return _context.abrupt("break", 34);

          case 9:
            _context.next = 11;
            return searchByOneUser(req.query.userid);

          case 11:
            complaints = _context.sent;
            return _context.abrupt("break", 34);

          case 13:
            _context.next = 15;
            return searchByTypeUser(req.query.typeuser);

          case 15:
            complaints = _context.sent;
            return _context.abrupt("break", 34);

          case 17:
            _context.next = 19;
            return searchByState(req.query.state);

          case 19:
            complaints = _context.sent;
            return _context.abrupt("break", 34);

          case 21:
            if (!(req.query.lng !== undefined)) {
              _context.next = 27;
              break;
            }

            _context.next = 24;
            return searchByLocation(req.query.lat, req.query.lng);

          case 24:
            complaints = _context.sent;
            _context.next = 28;
            break;

          case 27:
            res.status(400).json({
              message: 'one parameter is missing'
            });

          case 28:
            return _context.abrupt("break", 34);

          case 29:
            _context.next = 31;
            return searchComplaints();

          case 31:
            complaints = _context.sent;
            return _context.abrupt("break", 34);

          case 33:
            res.status(400).json({
              message: 'unrecognized parameter'
            });

          case 34:
            res.status(200).json({
              data: complaints || []
            });
            _context.next = 41;
            break;

          case 37:
            _context.prev = 37;
            _context.t1 = _context["catch"](1);
            console.log(_context.t1);
            res.status(500).json({
              message: 'The request failed.'
            });

          case 41:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 37]]);
  }));

  return function getComplaints(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); //GET -> ID


exports.getComplaints = getComplaints;

var getOneComplaint = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var id, complaint;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _context2.next = 4;
            return _Complaints["default"].findOne({
              attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
              include: [{
                model: _TypeWork["default"]
              }, {
                model: _Users["default"]
              }],
              where: {
                ID: id
              }
            });

          case 4:
            complaint = _context2.sent;
            res.status(200).json({
              data: complaint || {}
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

  return function getOneComplaint(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); //GET Complaints by Vote


exports.getOneComplaint = getOneComplaint;

var getComplaintsByVote = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var complaints;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _Complaints["default"].findAll({
              attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
              include: [{
                model: _TypeWork["default"]
              }, {
                model: _Users["default"]
              }],
              order: [['VOTE', 'DESC']]
            });

          case 3:
            complaints = _context3.sent;
            res.status(200).json({
              data: complaints
            });
            _context3.next = 11;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'The request failed.'
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function getComplaintsByVote(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}(); //POST


exports.getComplaintsByVote = getComplaintsByVote;

var createComplaint = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, description, address, lat, lng, photoURL, idType, idUser, newComplaint;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _req$body = req.body, description = _req$body.description, address = _req$body.address, lat = _req$body.lat, lng = _req$body.lng, photoURL = _req$body.photoURL, idType = _req$body.idType, idUser = _req$body.idUser;
            _context4.next = 4;
            return _Complaints["default"].create({
              CREATE_AT: new Date(),
              DESCRIPTION: description,
              ADDRESS: address,
              LAT: lat.toFixed(6),
              LNG: lng.toFixed(6),
              PHOTO_URL: photoURL,
              VOTE: 0,
              ID_TYPE: idType,
              ID_U: idUser
            }, {
              fields: ['CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'ID_TYPE', 'ID_U']
            });

          case 4:
            newComplaint = _context4.sent;

            if (!newComplaint) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.status(201).json({
              message: 'Complaints created successfully',
              data: newComplaint
            }));

          case 7:
            _context4.next = 13;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'Something goes wrong',
              data: {}
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function createComplaint(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //DELETE    //MODIFICARLO PARA QUE SOLO SEA ELIMINADO SI EL ESTADO ES ACTIVO


exports.createComplaint = createComplaint;

var deleteComplaint = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            id = req.params.id;
            _context5.next = 4;
            return _Complaints["default"].destroy({
              where: {
                ID: id
              }
            });

          case 4:
            deleteRowCount = _context5.sent;
            res.status(200).json({
              message: 'Complaints Deleted succesfully',
              count: deleteRowCount
            });
            _context5.next = 12;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(500).json({
              message: 'The request failed.'
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function deleteComplaint(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}(); //UPVOTECOMPLAINT


exports.deleteComplaint = deleteComplaint;

var upVoteComplaint = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var id, complaints;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = req.params.id;
            _context7.next = 4;
            return _Complaints["default"].findAll({
              attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'ID_TYPE', 'VOTE', 'ID_U', 'STATE'],
              where: {
                ID: id
              }
            });

          case 4:
            complaints = _context7.sent;

            if (complaints.length > 0) {
              complaints.forEach( /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(complaint) {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          _context6.next = 2;
                          return complaint.update({
                            VOTE: complaint.VOTE + 1
                          });

                        case 2:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function (_x13) {
                  return _ref7.apply(this, arguments);
                };
              }());
            }

            return _context7.abrupt("return", res.status(200).json({
              message: 'Complaints Updated Successfully',
              data: complaints
            }));

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);
            res.status(500).json({
              message: 'The request failed.'
            });

          case 13:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 9]]);
  }));

  return function upVoteComplaint(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}(); //UpdateState


exports.upVoteComplaint = upVoteComplaint;

var UpdateState = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var id, state, stateValue, complaints;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            id = req.params.id;
            state = req.query.state;
            console.log(state);
            stateValue = null;
            _context9.t0 = state;
            _context9.next = _context9.t0 === "1" ? 8 : _context9.t0 === "2" ? 10 : _context9.t0 === "3" ? 12 : _context9.t0 === "4" ? 14 : 16;
            break;

          case 8:
            stateValue = 'Publicada';
            return _context9.abrupt("break", 17);

          case 10:
            stateValue = 'Rechazada';
            return _context9.abrupt("break", 17);

          case 12:
            stateValue = 'Ejecucion';
            return _context9.abrupt("break", 17);

          case 14:
            stateValue = 'Finalizada';
            return _context9.abrupt("break", 17);

          case 16:
            res.status(400).json({
              message: 'unrecognized parameter'
            });

          case 17:
            _context9.next = 19;
            return _Complaints["default"].findAll({
              attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'ID_TYPE', 'VOTE', 'ID_U', 'STATE'],
              where: {
                ID: id
              }
            });

          case 19:
            complaints = _context9.sent;

            if (complaints.length > 0 && stateValue !== null) {
              complaints.forEach( /*#__PURE__*/function () {
                var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(complaint) {
                  return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                      switch (_context8.prev = _context8.next) {
                        case 0:
                          _context8.next = 2;
                          return complaint.update({
                            STATE: stateValue
                          });

                        case 2:
                        case "end":
                          return _context8.stop();
                      }
                    }
                  }, _callee8);
                }));

                return function (_x16) {
                  return _ref9.apply(this, arguments);
                };
              }());
            }

            return _context9.abrupt("return", res.status(200).json({
              message: 'Complaints Updated Successfully',
              data: complaints
            }));

          case 24:
            _context9.prev = 24;
            _context9.t1 = _context9["catch"](0);
            console.log(_context9.t1);
            res.status(500).json({
              message: 'The request failed.'
            });

          case 28:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9, null, [[0, 24]]);
  }));

  return function UpdateState(_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}(); //functions for GET complaints by filter


exports.UpdateState = UpdateState;

var searchComplaints = function searchComplaints() {
  return _Complaints["default"].findAll({
    attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
    include: [{
      model: _TypeWork["default"]
    }, {
      model: _Users["default"]
    }],
    order: [['ID', 'DESC']]
  });
};

var searchByTypeWork = function searchByTypeWork(typeId) {
  return _Complaints["default"].findAll({
    attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
    include: [{
      model: _TypeWork["default"]
    }, {
      model: _Users["default"]
    }],
    where: {
      ID_TYPE: typeId
    }
  });
};

var searchByOneUser = function searchByOneUser(userId) {
  return _Complaints["default"].findAll({
    attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
    include: [{
      model: _TypeWork["default"]
    }, {
      model: _Users["default"]
    }],
    where: {
      ID_U: userId
    }
  });
}; // 1- Unregistered , 2- Registered


var searchByTypeUser = function searchByTypeUser(type) {
  var isNull = undefined;

  if (type === '1') {
    isNull = null;
  } else if (type === '2') {
    isNull = _defineProperty({}, Op.not, null);
  }

  return _Complaints["default"].findAll({
    attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
    include: [{
      model: _TypeWork["default"]
    }, {
      model: _Users["default"]
    }],
    where: {
      ID_U: isNull
    },
    order: [['ID', 'DESC']]
  });
};

var searchByLocation = function searchByLocation(lat, lng) {
  var radio = 0.01;
  var locationRadio = {
    latSup: (parseFloat(lat) + radio).toFixed(4),
    latInf: (parseFloat(lat) - radio).toFixed(4),
    lngDer: (parseFloat(lng) + radio).toFixed(4),
    lngIzq: (parseFloat(lng) - radio).toFixed(4)
  };
  return _Complaints["default"].findAll({
    attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
    include: [{
      model: _TypeWork["default"]
    }, {
      model: _Users["default"]
    }],
    where: {
      LAT: _defineProperty({}, Op.between, [locationRadio.latInf, locationRadio.latSup]),
      LNG: _defineProperty({}, Op.between, [locationRadio.lngIzq, locationRadio.lngDer])
    },
    order: [['ID', 'DESC']]
  });
}; // 1- Publicada, 2- Ejecucion, 3- Rechazada, 4- Finalizada


var searchByState = function searchByState(state) {
  var stateName = '';

  if (state === '1') {
    stateName = 'Publicada';
  }

  if (state === '2') {
    stateName = 'Ejecucion';
  }

  if (state === '3') {
    stateName = 'Rechazada';
  }

  if (state === '4') {
    stateName = 'Finalizada';
  }

  return _Complaints["default"].findAll({
    attributes: ['ID', 'CREATE_AT', 'DESCRIPTION', 'ADDRESS', 'LAT', 'LNG', 'PHOTO_URL', 'VOTE', 'STATE'],
    include: [{
      model: _TypeWork["default"]
    }, {
      model: _Users["default"]
    }],
    where: {
      STATE: stateName
    },
    order: [['ID', 'DESC']]
  });
};
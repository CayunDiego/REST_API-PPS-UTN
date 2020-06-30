"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _middlewares = require("./middlewares");

var _typeworks = _interopRequireDefault(require("./routes/typeworks.routes"));

var _complaints = _interopRequireDefault(require("./routes/complaints.routes"));

var _users = _interopRequireDefault(require("./routes/users.routes"));

var _comments = _interopRequireDefault(require("./routes/comments.routes"));

var _votesComplaint = _interopRequireDefault(require("./routes/votesComplaint.routes"));

var _votesCommmet = _interopRequireDefault(require("./routes/votesCommmet.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//importing routes
var swaggerDocument = require(_config.SWAGGER_PATH); //Habilitamos CORS
//Vamos a crear un lista blanca, para que solo la url que le digamos, tenga acceso a la API
// const whiteList = ['http://localhost:3000', 'http://192.168.0.101:3000/'];
// const corsOptions = {
//     origin: (origin, callback) => {
//         const existe = whiteList.some( dominio => dominio === origin);
//         if(existe){
//             callback(null, true);
//         } else {
//             callback(new Error('No Permitido por CORS'));
//         }
//     }
// }
// app.use(cors(corsOptions));


var app = function app() {
  var router = (0, _express["default"])();
  var apiRoutes = (0, _express["default"])(); //middlewares por default

  apiRoutes.use((0, _express.json)()).use((0, _morgan["default"])('dev')).use((0, _cors["default"])()).use((0, _helmet["default"])()); //ROUTES

  apiRoutes.use('/typework', _typeworks["default"]);
  apiRoutes.use('/complaint', _complaints["default"]);
  apiRoutes.use('/user', _users["default"]);
  apiRoutes.use('/comment', _comments["default"]);
  apiRoutes.use('/votescomplaint', _votesComplaint["default"]);
  apiRoutes.use('/votescomment', _votesCommmet["default"]);
  apiRoutes.use('/auth', _auth["default"]);
  router.use('/api/v1', apiRoutes);
  router.use('/api-docs', _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(swaggerDocument));
  router.use(_middlewares.NotFoundMiddleware);
  return router;
};

var _default = app;
exports["default"] = _default;
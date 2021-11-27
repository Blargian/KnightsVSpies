/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client/reducers.js":
/*!****************************!*\
  !*** ./client/reducers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer),
/* harmony export */   "ioCreateRoom": () => (/* binding */ ioCreateRoom),
/* harmony export */   "roomCreated": () => (/* binding */ roomCreated)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

var initialState = {
  game: {
    missionLeader: false,
    leaderSelection: [],
    round: 0,
    closeEyes: false,
    spies: [],
    knights: [],
    votesPass: 0,
    votesFail: 0
  }
};
var initialRoomState = {
  selfId: '',
  selfAlias: '',
  players: [],
  roomCode: ''
};
var roomsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "room",
  initialState: initialRoomState,
  reducers: {
    ioCreateRoom: function ioCreateRoom(state, action) {},
    roomCreated: function roomCreated(state, _ref) {
      var action = _ref.action,
          payload = _ref.payload;
      state.roomCode = payload.roomCode;
      state.selfId = payload.selfId;
      return state;
    }
  }
}); //Root reducer for usage in the store

var rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  room: roomsSlice.reducer
}); //Make action creators accesible 

var _roomsSlice$actions = roomsSlice.actions,
    ioCreateRoom = _roomsSlice$actions.ioCreateRoom,
    roomCreated = _roomsSlice$actions.roomCreated;


/***/ }),

/***/ "./server/controllers/gameController.js":
/*!**********************************************!*\
  !*** ./server/controllers/gameController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../client/reducers */ "./client/reducers.js");
/* harmony import */ var _models_room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/room */ "./server/models/room.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // one instance is made on server start up

var GameController = /*#__PURE__*/function () {
  function GameController(io) {
    _classCallCheck(this, GameController);

    this.io = io;
    this.rooms = [];
    this.connect();
  }

  _createClass(GameController, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.io.on("connection", function (socket) {
        //sets up listener for room
        socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.ioCreateRoom.type, function (payload) {
          console.log('Creating new room');
          var newRoom = new _models_room__WEBPACK_IMPORTED_MODULE_1__.Room();

          _this.rooms.push(newRoom); //emits action with room as payload, playerid


          socket.emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.roomCreated.type, {
            roomCode: newRoom.roomCode,
            selfId: 'dummy_value'
          });
        }); //sets up listener for connect code

        socket.on("room/ioJoinRoom", function () {}); //check to see if the room code exists
        //add player to game if it does
        //emits action for setting roomcode, playerid
        //if it doesn't 
        //dispatch an error action
      });
    }
  }]);

  return GameController;
}();



/***/ }),

/***/ "./server/models/room.js":
/*!*******************************!*\
  !*** ./server/models/room.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Room": () => (/* binding */ Room)
/* harmony export */ });
/* harmony import */ var randomstring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! randomstring */ "randomstring");
/* harmony import */ var randomstring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(randomstring__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Room = /*#__PURE__*/function () {
  function Room(callingPlayer) {
    _classCallCheck(this, Room);

    this.roomCode = this.generateRoomCode();
    this.players = [];
  }

  _createClass(Room, [{
    key: "generateRoomCode",
    value: function generateRoomCode() {
      return randomstring__WEBPACK_IMPORTED_MODULE_0___default().generate({
        length: 6,
        charset: 'alphanumeric'
      });
    }
  }, {
    key: "addCallingPlayer",
    value: function addCallingPlayer(player) {
      this.players.push({
        playerID: callingPlayer.id,
        readyToStart: false
      });
    }
  }]);

  return Room;
}();

/***/ }),

/***/ "./server/socket.js":
/*!**************************!*\
  !*** ./server/socket.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (httpServer) {
  console.log('Setting up socket.io server...');
  var io = new socket_io__WEBPACK_IMPORTED_MODULE_0__.Server(httpServer, {
    cors: {
      origin: "*"
    }
  });
  return io;
});

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "randomstring":
/*!*******************************!*\
  !*** external "randomstring" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("randomstring");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("socket.io-client");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket */ "./server/socket.js");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _controllers_gameController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/gameController */ "./server/controllers/gameController.js");




var publicPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, '..', 'public');

var expressServer = express__WEBPACK_IMPORTED_MODULE_0___default()();
expressServer.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"](publicPath));
expressServer.get('*', function (req, res) {
  res.sendFile(path__WEBPACK_IMPORTED_MODULE_3___default().join(publicPath, 'index.html'));
});
var httpServer = (0,http__WEBPACK_IMPORTED_MODULE_2__.createServer)(expressServer);
var io = (0,_socket__WEBPACK_IMPORTED_MODULE_1__["default"])(httpServer);
httpServer.listen(3000, function () {
  console.log("Server running on http://localhost:3000");
});
var gameController = new _controllers_gameController__WEBPACK_IMPORTED_MODULE_4__["default"](io);
})();

/******/ })()
;
//# sourceMappingURL=server.js.map
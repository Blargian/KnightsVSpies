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
/* harmony export */   "roomCreated": () => (/* binding */ roomCreated),
/* harmony export */   "navigateToLobby": () => (/* binding */ navigateToLobby),
/* harmony export */   "ioEnterRoomCode": () => (/* binding */ ioEnterRoomCode),
/* harmony export */   "updatePlayers": () => (/* binding */ updatePlayers),
/* harmony export */   "updateSelf": () => (/* binding */ updateSelf),
/* harmony export */   "errorOccured": () => (/* binding */ errorOccured),
/* harmony export */   "ioPlayerIsReady": () => (/* binding */ ioPlayerIsReady)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


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
  roomCode: '',
  error: null
};
var roomsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "room",
  initialState: initialRoomState,
  reducers: {
    ioCreateRoom: function ioCreateRoom(state, action) {},
    roomCreated: function roomCreated(state, _ref) {
      var action = _ref.action,
          payload = _ref.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    },
    ioEnterRoomCode: function ioEnterRoomCode(state, _ref2) {
      var action = _ref2.action,
          payload = _ref2.payload;
    },
    updatePlayers: function updatePlayers(state, _ref3) {
      var action = _ref3.action,
          payload = _ref3.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        players: payload
      });
    },
    updateSelf: function updateSelf(state, _ref4) {
      var action = _ref4.action,
          payload = _ref4.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    },
    errorOccured: function errorOccured(state, _ref5) {
      var action = _ref5.action,
          payload = _ref5.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        error: payload
      });
    },
    ioPlayerIsReady: function ioPlayerIsReady(state, _ref6) {
      var action = _ref6.action,
          payload = _ref6.payload;
    }
  }
}); //Root reducer for usage in the store

var rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  room: roomsSlice.reducer
}); //Make action creators accesible 

var _roomsSlice$actions = roomsSlice.actions,
    ioCreateRoom = _roomsSlice$actions.ioCreateRoom,
    roomCreated = _roomsSlice$actions.roomCreated,
    navigateToLobby = _roomsSlice$actions.navigateToLobby,
    ioEnterRoomCode = _roomsSlice$actions.ioEnterRoomCode,
    updatePlayers = _roomsSlice$actions.updatePlayers,
    updateSelf = _roomsSlice$actions.updateSelf,
    errorOccured = _roomsSlice$actions.errorOccured,
    ioPlayerIsReady = _roomsSlice$actions.ioPlayerIsReady;


/***/ }),

/***/ "./server/controllers/lobbyController.js":
/*!***********************************************!*\
  !*** ./server/controllers/lobbyController.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LobbyController)
/* harmony export */ });
/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../client/reducers */ "./client/reducers.js");
/* harmony import */ var _models_room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/room */ "./server/models/room.js");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // one instance is made on server start up

var LobbyController = /*#__PURE__*/function () {
  function LobbyController() {
    _classCallCheck(this, LobbyController);

    _defineProperty(this, "createRoom", function (io, playerId) {
      var newRoom = new _models_room__WEBPACK_IMPORTED_MODULE_1__.Room(playerId);
      this.addToRoomMap(newRoom);
      this.addPlayerToRoomMap(newRoom, playerId);
      io.to(playerId).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.roomCreated.type, this.formattedRoom(newRoom, playerId));
      return newRoom.roomCode;
    });

    _defineProperty(this, "joinRoom", function (enteredRoomCode, io, socket) {
      if (this.checkRoomExists(enteredRoomCode)) {
        if (!this.roomIsFull(enteredRoomCode)) {
          socket.join(enteredRoomCode);
          var room = this.rooms.get(enteredRoomCode);
          this.addPlayerToRoomMap(room, socket.id);
          var players = this.addPlayerToRoom(enteredRoomCode, socket.id); //update this players state 

          io.to(socket.id).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.updateSelf.type, this.formattedPlayer(enteredRoomCode, players, socket.id)); //update all players state with the list of players

          io["in"](enteredRoomCode).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.updatePlayers.type, players);
        } else {
          io.to(socket.id).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.errorOccured.type, 'roomIsFull');
        }
      } else {}
    });

    _defineProperty(this, "playerLeft", function (playerId, io) {
      try {
        this.removePlayerFromRoom(playerId, io);
      } catch (error) {
        console.log(chalk__WEBPACK_IMPORTED_MODULE_2___default().red('an error occured trying to remove a player from their room'));
        console.log(error);
      }
    });

    _defineProperty(this, "addToRoomMap", function (newRoom) {
      return this.rooms.set(newRoom.roomCode, newRoom);
    });

    _defineProperty(this, "addPlayerToRoomMap", function (newRoom, playerId) {
      return this.playersToRooms.set(playerId, newRoom.roomCode);
    });

    _defineProperty(this, "formattedRoom", function (newRoom, playerId) {
      return {
        roomCode: newRoom.roomCode,
        selfId: playerId,
        selfAlias: newRoom.players[0].selfAlias,
        players: newRoom.players
      };
    });

    _defineProperty(this, "formattedPlayer", function (roomCode, playersArray, playerId) {
      var selfAlias = playersArray.filter(function (player) {
        return player.selfId === playerId;
      }).selfAlias;
      return {
        roomCode: roomCode,
        selfId: playerId,
        selfAlias: selfAlias
      };
    });

    _defineProperty(this, "roomIsFull", function (roomCode) {
      var room = this.rooms.get(roomCode);
      return room.players.length < 10 ? false : true;
    });

    _defineProperty(this, "updatePlayerReadiness", function (callingPlayerId) {
      var room = this.rooms.get(this.playersToRooms.get(callingPlayerId));
      var updatedPlayerArray = (room.players || []).map(function (player) {
        if (player.playerID === callingPlayerId) {
          return _objectSpread(_objectSpread({}, player), {}, {
            readyToStart: !player.readyToStart
          });
        } else {
          return player;
        }
      });
      return updatedPlayerArray;
    });

    _defineProperty(this, "sendUpdatedPlayersToRoom", function (updatedPlayers, io, enteredRoomCode) {
      io["in"](enteredRoomCode).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.updatePlayers.type, updatedPlayers);
    });

    this.rooms = new Map();
    this.playersToRooms = new Map();
  }

  _createClass(LobbyController, [{
    key: "checkRoomExists",
    value: function checkRoomExists(enteredCode) {
      return this.rooms.has(enteredCode);
    }
  }, {
    key: "addPlayerToRoom",
    value: function addPlayerToRoom(enteredRoomCode, player) {
      var room = this.rooms.get(enteredRoomCode);

      if (room) {
        if (room.players.length < 10) {
          room.addPlayer(player);
        }

        return room.players;
      } else {
        console.log(chalk__WEBPACK_IMPORTED_MODULE_2___default().red("no room was found for ".concat(enteredCode)));
      }
    }
  }, {
    key: "removePlayerFromRoom",
    value: function removePlayerFromRoom(playerId, io) {
      if (this.playersToRooms.size === 0 || this.playersToRooms.get(playerId) === undefined) {
        return;
      }

      var roomName = this.playersToRooms.get(playerId);
      var playerRoom = this.rooms.get(roomName);
      var remainingPlayers = playerRoom.players.filter(function (player) {
        return player.playerID !== playerId;
      });
      playerRoom = _objectSpread(_objectSpread({}, playerRoom), {}, {
        players: remainingPlayers
      });

      if (playerRoom.players.length === 0) {
        this.rooms["delete"](roomName);
      } else {
        this.rooms.set(roomName, playerRoom);
        io["in"](roomName).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.updatePlayers.type, remainingPlayers);
      }
    }
  }]);

  return LobbyController;
}();



/***/ }),

/***/ "./server/controllers/mainController.js":
/*!**********************************************!*\
  !*** ./server/controllers/mainController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainController)
/* harmony export */ });
/* harmony import */ var _lobbyController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lobbyController */ "./server/controllers/lobbyController.js");
/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client/reducers */ "./client/reducers.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


 //Handles socket 

var MainController = function MainController(io) {
  var _this = this;

  _classCallCheck(this, MainController);

  this.io = io;
  this.lobbyController = new _lobbyController__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.io.on("connection", function (socket) {
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_1__.ioCreateRoom.type, function () {
      socket.join(_this.lobbyController.createRoom(_this.io, socket.id));
    });
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_1__.ioEnterRoomCode.type, function (enteredRoomCode) {
      _this.lobbyController.joinRoom(enteredRoomCode, _this.io, socket);
    });
    socket.on("disconnect", function () {
      _this.lobbyController.playerLeft(socket.id, _this.io);
    });
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_1__.ioPlayerIsReady.type, function (payload) {
      var updatedPlayers = _this.lobbyController.updatePlayerReadiness(payload.playerId);

      _this.lobbyController.rooms.get(payload.roomCode).updatePlayers(updatedPlayers);

      _this.lobbyController.sendUpdatedPlayersToRoom(updatedPlayers, io, payload.roomCode);
    });
  });
};



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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Room = //callingPlayerId: socket.id
function Room(_callingPlayerId) {
  _classCallCheck(this, Room);

  _defineProperty(this, "generateRoomCode", function () {
    return randomstring__WEBPACK_IMPORTED_MODULE_0___default().generate({
      length: 6,
      charset: 'alphanumeric'
    });
  });

  _defineProperty(this, "addPlayer", function (callingPlayerId) {
    this.players.push({
      playerID: callingPlayerId,
      selfAlias: "Player".concat(this.players.length + 1),
      readyToStart: false
    });
  });

  _defineProperty(this, "updatePlayers", function (newPlayerArray) {
    this.players = newPlayerArray;
  });

  this.roomCode = this.generateRoomCode();
  this.players = [];
  this.addPlayer(_callingPlayerId);
};

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

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

module.exports = require("chalk");

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
/* harmony import */ var _controllers_mainController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/mainController */ "./server/controllers/mainController.js");




var publicPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, '..', 'public', 'dist');

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
var mainController = new _controllers_mainController__WEBPACK_IMPORTED_MODULE_4__["default"](io);
})();

/******/ })()
;
//# sourceMappingURL=server.js.map
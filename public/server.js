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
/* harmony export */   "allPlayersAcknowledged": () => (/* binding */ allPlayersAcknowledged),
/* harmony export */   "errorOccured": () => (/* binding */ errorOccured),
/* harmony export */   "hideShowWinner": () => (/* binding */ hideShowWinner),
/* harmony export */   "ioCastToVote": () => (/* binding */ ioCastToVote),
/* harmony export */   "ioCreateRoom": () => (/* binding */ ioCreateRoom),
/* harmony export */   "ioEnterRoomCode": () => (/* binding */ ioEnterRoomCode),
/* harmony export */   "ioGetAllData": () => (/* binding */ ioGetAllData),
/* harmony export */   "ioPlayerAcknowledged": () => (/* binding */ ioPlayerAcknowledged),
/* harmony export */   "ioPlayerCastVote": () => (/* binding */ ioPlayerCastVote),
/* harmony export */   "ioPlayerIsReady": () => (/* binding */ ioPlayerIsReady),
/* harmony export */   "ioStartGame": () => (/* binding */ ioStartGame),
/* harmony export */   "ioUpdateSelectedPlayers": () => (/* binding */ ioUpdateSelectedPlayers),
/* harmony export */   "ioVetoMissionHandler": () => (/* binding */ ioVetoMissionHandler),
/* harmony export */   "navigateToGame": () => (/* binding */ navigateToGame),
/* harmony export */   "navigateToLobby": () => (/* binding */ navigateToLobby),
/* harmony export */   "resetGameState": () => (/* binding */ resetGameState),
/* harmony export */   "returnAllRoomData": () => (/* binding */ returnAllRoomData),
/* harmony export */   "roomCreated": () => (/* binding */ roomCreated),
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer),
/* harmony export */   "showWinner": () => (/* binding */ showWinner),
/* harmony export */   "updateAllowToVote": () => (/* binding */ updateAllowToVote),
/* harmony export */   "updateCastToVote": () => (/* binding */ updateCastToVote),
/* harmony export */   "updateGameState": () => (/* binding */ updateGameState),
/* harmony export */   "updateMissionVetoed": () => (/* binding */ updateMissionVetoed),
/* harmony export */   "updatePlayers": () => (/* binding */ updatePlayers),
/* harmony export */   "updateSelectedPlayers": () => (/* binding */ updateSelectedPlayers),
/* harmony export */   "updateSelf": () => (/* binding */ updateSelf)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var initialGameState = {
  players: [],
  spies: [],
  knights: [],
  rounds: [],
  leader: '',
  showRoles: false,
  allAcknowledged: false,
  selectedPlayers: [],
  currentRound: 0,
  castToVote: false,
  allowToVote: true,
  showWinner: false,
  knightsWon: false
};
var initialRoomState = {
  selfId: '',
  selfAlias: '',
  players: [],
  roomCode: null,
  error: null,
  gameStarted: false
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
    },
    ioStartGame: function ioStartGame(state) {},
    navigateToGame: function navigateToGame(state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        gameStarted: true
      });
    },
    returnAllRoomData: function returnAllRoomData(state, _ref7) {
      var action = _ref7.action,
        payload = _ref7.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    }
  }
});
var gameSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "game",
  initialState: initialGameState,
  reducers: {
    updateGameState: function updateGameState(state, _ref8) {
      var action = _ref8.action,
        payload = _ref8.payload;
      return _objectSpread(_objectSpread({}, state), payload);
    },
    ioGetAllData: function ioGetAllData(state) {},
    ioPlayerAcknowledged: function ioPlayerAcknowledged(state) {},
    allPlayersAcknowledged: function allPlayersAcknowledged(state, _ref9) {
      var action = _ref9.action,
        payload = _ref9.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        allAcknowledged: true,
        showRoles: false
      });
    },
    ioUpdateSelectedPlayers: function ioUpdateSelectedPlayers(state, _ref10) {
      var action = _ref10.action,
        payload = _ref10.payload;
    },
    updateSelectedPlayers: function updateSelectedPlayers(state, _ref11) {
      var action = _ref11.action,
        payload = _ref11.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedPlayers: payload
      });
    },
    ioCastToVote: function ioCastToVote(state, _ref12) {
      var action = _ref12.action,
        payload = _ref12.payload;
    },
    updateCastToVote: function updateCastToVote(state, _ref13) {
      var action = _ref13.action,
        payload = _ref13.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        castToVote: payload
      });
    },
    ioPlayerCastVote: function ioPlayerCastVote(state, _ref14) {
      var action = _ref14.action,
        payload = _ref14.payload;
    },
    updateAllowToVote: function updateAllowToVote(state, _ref15) {
      var action = _ref15.action,
        payload = _ref15.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        allowToVote: payload
      });
    },
    showWinner: function showWinner(state, _ref16) {
      var action = _ref16.action,
        payload = _ref16.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        showWinner: true,
        knightsWon: payload
      });
    },
    hideShowWinner: function hideShowWinner(state, _ref17) {
      var action = _ref17.action,
        payload = _ref17.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        showWinner: false
      });
    },
    resetGameState: function resetGameState(state, _ref18) {
      var action = _ref18.action,
        payload = _ref18.payload;
      return _objectSpread(_objectSpread({}, state), {}, {
        leader: payload.newLeader,
        selectedPlayers: [],
        currentRound: payload.currentRound,
        castToVote: false,
        allowToVote: true,
        showWinner: false,
        knightsWon: false,
        rounds: payload.rounds
      });
    },
    ioVetoMissionHandler: function ioVetoMissionHandler(state, _ref19) {
      var action = _ref19.action,
        payload = _ref19.payload;
    },
    updateMissionVetoed: function updateMissionVetoed(state, _ref20) {
      var action = _ref20.action,
        payload = _ref20.payload;
      state.rounds[state.currentRound].missionWasVetoed = payload;
    }
  }
});

//Root reducer for usage in the store
var rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
  room: roomsSlice.reducer,
  game: gameSlice.reducer
});

//Make action creators accesible 

var _roomsSlice$actions = roomsSlice.actions,
  ioCreateRoom = _roomsSlice$actions.ioCreateRoom,
  roomCreated = _roomsSlice$actions.roomCreated,
  navigateToLobby = _roomsSlice$actions.navigateToLobby,
  ioEnterRoomCode = _roomsSlice$actions.ioEnterRoomCode,
  updatePlayers = _roomsSlice$actions.updatePlayers,
  updateSelf = _roomsSlice$actions.updateSelf,
  errorOccured = _roomsSlice$actions.errorOccured,
  ioPlayerIsReady = _roomsSlice$actions.ioPlayerIsReady,
  ioStartGame = _roomsSlice$actions.ioStartGame,
  navigateToGame = _roomsSlice$actions.navigateToGame,
  returnAllRoomData = _roomsSlice$actions.returnAllRoomData;

var _gameSlice$actions = gameSlice.actions,
  updateGameState = _gameSlice$actions.updateGameState,
  ioGetAllData = _gameSlice$actions.ioGetAllData,
  ioPlayerAcknowledged = _gameSlice$actions.ioPlayerAcknowledged,
  allPlayersAcknowledged = _gameSlice$actions.allPlayersAcknowledged,
  ioUpdateSelectedPlayers = _gameSlice$actions.ioUpdateSelectedPlayers,
  updateSelectedPlayers = _gameSlice$actions.updateSelectedPlayers,
  ioCastToVote = _gameSlice$actions.ioCastToVote,
  updateCastToVote = _gameSlice$actions.updateCastToVote,
  ioPlayerCastVote = _gameSlice$actions.ioPlayerCastVote,
  updateAllowToVote = _gameSlice$actions.updateAllowToVote,
  showWinner = _gameSlice$actions.showWinner,
  hideShowWinner = _gameSlice$actions.hideShowWinner,
  resetGameState = _gameSlice$actions.resetGameState,
  ioVetoMissionHandler = _gameSlice$actions.ioVetoMissionHandler,
  updateMissionVetoed = _gameSlice$actions.updateMissionVetoed;


/***/ }),

/***/ "./server/controllers/gameController.js":
/*!**********************************************!*\
  !*** ./server/controllers/gameController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "communicatePlayerCantVote": () => (/* binding */ communicatePlayerCantVote),
/* harmony export */   "communicateStartOfGame": () => (/* binding */ communicateStartOfGame),
/* harmony export */   "default": () => (/* binding */ GameController)
/* harmony export */ });
/* harmony import */ var _models_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/game */ "./server/models/game.js");
/* harmony import */ var _models_round__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/round */ "./server/models/round.js");
/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/reducers */ "./client/reducers.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "socket.io-client");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }





var GameController = /*#__PURE__*/function () {
  function GameController(io) {
    _classCallCheck(this, GameController);
    _defineProperty(this, "createGame", function (room) {
      var game = new _models_game__WEBPACK_IMPORTED_MODULE_0__.Game(room);
      this.games.set(room.roomCode, game);
      return game;
    });
    _defineProperty(this, "checkAllPlayersAcknowledged", function (roomCode) {
      var game = this.games.get(roomCode);
      game.playersAcknowledgedRole++;
      if (game.playersAcknowledgedRole === game.players.length) {
        this.io["in"](roomCode).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.allPlayersAcknowledged.type);
      }
      return game;
    });
    _defineProperty(this, "sendSelectedPlayersToRoom", function (roomCode, selectedPlayers) {
      this.io["in"](roomCode).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.updateSelectedPlayers.type, selectedPlayers);
    });
    _defineProperty(this, "updateCastToVote", function (roomCode, castToVote) {
      this.castToVote = castToVote;
      this.io["in"](roomCode).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.updateCastToVote.type, castToVote);
    });
    _defineProperty(this, "getGameFromRoomcode", function (roomCode) {
      return this.games.get(roomCode);
    });
    _defineProperty(this, "setGameWithRoomcode", function (roomCode, game) {
      this.games.set(roomCode, game);
    });
    _defineProperty(this, "updateVetoDecision", function (roomCode, playerId, veto) {
      var game = this.getGameFromRoomcode(roomCode);
      if (veto === true) {
        game.rounds[game.currentRound].vetoed.push(playerId);
      } else if (veto === false) {
        game.rounds[game.currentRound].accepted.push(playerId);
      }
      this.setGameWithRoomcode(roomCode, game);
    });
    _defineProperty(this, "checkVetoStatus", function (roomCode) {
      var returnObject = {
        allPlayersVoted: false,
        vetoMission: false
      };
      var game = this.getGameFromRoomcode(roomCode);
      var currentRound = game.rounds[game.currentRound];
      if (currentRound.vetoed.length + currentRound.accepted.length === game.players.length) {
        returnObject.allPlayersVoted = true;
      }
      ;
      if (currentRound.vetoed.length > currentRound.accepted.length) {
        returnObject.vetoMission = true;
      } else {
        returnObject.vetoMission = false;
      }
      ;
      return returnObject;
    });
    _defineProperty(this, "updateMissionVetoed", function (roomCode, vetoed) {
      if (vetoed) {
        var game = this.getGameFromRoomcode(roomCode);
        game.numberOfVetos++;
        this.io["in"](roomCode).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.updateMissionVetoed.type, true);
        this.transitionRound(roomCode);
        var _this$checkGameOver = this.checkGameOver(game),
          _this$checkGameOver2 = _slicedToArray(_this$checkGameOver, 2),
          gameOver = _this$checkGameOver2[0],
          knightsWonGame = _this$checkGameOver2[1];
        if (gameOver) {
          console.log('Game over');
        }
      } else {
        var _game = this.getGameFromRoomcode(roomCode);
        _game.numberOfVetos = 0; //if players did not veto then the veto count gets reset 
        this.setGameWithRoomcode(roomCode, _game);
        this.io["in"](roomCode).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.updateMissionVetoed.type, false);
      }
    });
    _defineProperty(this, "updatePlayerVote", function (gameToUpdate, selfId, missionPass) {
      var game = gameToUpdate;
      missionPass ? game.rounds[game.currentRound].numberOfPass++ : game.rounds[game.currentRound].numberOfFail++;
      var playerName = this.getNameFromId(game, selfId);
      game.rounds[game.currentRound].playersOnMission.push(playerName);
      return game;
    });
    _defineProperty(this, "checkAllPlayersVoted", function (roomCode) {
      var game = this.getGameFromRoomcode(roomCode);
      var currentRound = game.rounds[game.currentRound];
      if (currentRound.numberOfFail + currentRound.numberOfPass === game.missionRules[game.players.length - 5][game.currentRound]) {
        return true;
      } else {
        return false;
      }
    });
    _defineProperty(this, "checkIfKnightsWin", function (roomCode) {
      var game = this.games.get(roomCode);
      var currentRound = game.rounds[game.currentRound];

      //if mission was vetoed then nobody wins
      if (currentRound.numberOfFail === 0 && currentRound.numberOfPass === 0) {
        return null;
      }
      //if mission fails then spies won
      if (currentRound.numberOfFail >= 1 && game.players.length < 7) {
        game.rounds[game.currentRound].knightsWon = false;
        this.games.set(roomCode, game);
        return false;
      } else if (currentRound.numberOfFail >= 2 && game.players.length >= 7) {
        game.rounds[game.currentRound].knightsWon = false;
        this.games.set(roomCode, game);
        return false;
      } else {
        game.rounds[game.currentRound].knightsWon = true;
        this.games.set(roomCode, game);
        return true;
      }
    });
    _defineProperty(this, "transitionRound", function (roomCode) {
      var _this = this;
      var game = this.getGameFromRoomcode(roomCode);
      var knightsWon = this.checkIfKnightsWin(roomCode);
      if (knightsWon !== null) {
        this.storeWinner(knightsWon, this.getGameFromRoomcode(roomCode));
        this.incrementRound(game);
      } else {
        this.resetRound(game);
      }
      this.incrementLeader(game);
      //send something back to the front-end to show the winner 
      this.io["in"](roomCode).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.showWinner.type, knightsWon);
      setTimeout(function () {
        //wait 30 seconds and then
        // hide the winners 
        _this.io["in"](roomCode).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.hideShowWinner.type);
        _this.io["in"](roomCode).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.resetGameState.type, {
          rounds: game.rounds,
          currentRound: game.currentRound,
          newLeader: game.leader
        });
      }, 10000);

      // increment the round and reset what needs to be reset
    });
    _defineProperty(this, "resetRound", function (game) {
      var updatedGame = game;
      updatedGame.rounds[game.currentRound] = new _models_round__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.setGameWithRoomcode(updatedGame.roomCode, updatedGame);
    });
    _defineProperty(this, "storeWinner", function (knightsWin, game) {
      var updatedGame = game;
      updatedGame.rounds[game.currentRound].knightsWon = knightsWin;
      this.setGameWithRoomcode(updatedGame.roomCode, updatedGame);
    });
    _defineProperty(this, "incrementRound", function (game) {
      var updatedGame = game;
      updatedGame.currentRound++;
      this.setGameWithRoomcode(updatedGame.roomCode, updatedGame);
    });
    _defineProperty(this, "incrementLeader", function (game) {
      var updatedGame = game;
      updatedGame.leader = updatedGame.incrementMissionLeader(updatedGame.players, updatedGame.leader);
      this.setGameWithRoomcode(updatedGame.roomCode, updatedGame);
    });
    _defineProperty(this, "getNameFromId", function (game, providedSelfId) {
      var playerName = game.players.filter(function (player) {
        return player.playerId === providedSelfId;
      });
      if (playerName[0]) {
        return playerName[0].selfAlias;
      } else {
        return null;
      }
    });
    this.io = io;
    this.games = new Map();
  }
  _createClass(GameController, [{
    key: "checkGameOver",
    value: function checkGameOver(game) {
      var rounds = game.rounds;
      var timesKnightsWon = 0;
      var timesSpiesWon = 0;
      var gameOver = false;
      var knightsWonGame = null;
      if (game.numberOfVetos === game.players.length) {
        gameOver = true;
        knightsWonGame = null;
        return [gameOver, knightsWonGame];
      }
      rounds.forEach(function (round) {
        if (round.knightsWon === true) {
          timesKnightsWon++;
        } else if (round.knightsWon === false) {
          timesSpiesWon++;
        }
      });
      if (timesKnightsWon === 3) {
        gameOver = true;
        knightsWonGame = true;
        return [gameOver, knightsWonGame];
      } else if (timesSpiesWon === 3) {
        gameOver = true;
        knightsWonGame = false;
        return [gameOver, knightsWonGame];
      } else {
        return [false, null];
      }
    }
  }]);
  return GameController;
}();

var communicateStartOfGame = function communicateStartOfGame(io, toRoom, game) {
  io["in"](toRoom).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.navigateToGame.type);
  io["in"](toRoom).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.updateGameState.type, game);
};
var communicatePlayerCantVote = function communicatePlayerCantVote(io, selfId) {
  io.to(selfId).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.updateAllowToVote.type, false);
};

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



// one instance is made on server start up
var LobbyController = /*#__PURE__*/function () {
  function LobbyController(io) {
    _classCallCheck(this, LobbyController);
    _defineProperty(this, "createRoom", function (playerId) {
      var newRoom = new _models_room__WEBPACK_IMPORTED_MODULE_1__.Room(playerId);
      this.addToRoomMap(newRoom);
      this.addPlayerToRoomMap(newRoom, playerId);
      this.io.to(playerId).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.roomCreated.type, this.formattedRoom(newRoom, playerId));
      return newRoom.roomCode;
    });
    _defineProperty(this, "joinRoom", function (enteredRoomCode, socket) {
      if (this.checkRoomExists(enteredRoomCode)) {
        if (!this.roomIsFull(enteredRoomCode)) {
          socket.join(enteredRoomCode);
          var room = this.rooms.get(enteredRoomCode);
          this.addPlayerToRoomMap(room, socket.id);
          var players = this.addPlayerToRoom(enteredRoomCode, socket.id);
          //update this players state 
          this.io.to(socket.id).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.updateSelf.type, this.formattedPlayer(enteredRoomCode, players, socket.id));
          //update all players state with the list of players
          this.io["in"](enteredRoomCode).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.updatePlayers.type, players);
        } else {
          this.io.to(socket.id).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.errorOccured.type, 'roomIsFull');
        }
      } else {}
    });
    _defineProperty(this, "playerLeft", function (playerId) {
      try {
        this.removePlayerFromRoom(playerId);
      } catch (error) {
        console.log(chalk.red('an error occured trying to remove a player from their room'));
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
        if (player.playerId === callingPlayerId) {
          return _objectSpread(_objectSpread({}, player), {}, {
            readyToStart: !player.readyToStart
          });
        } else {
          return player;
        }
      });
      return updatedPlayerArray;
    });
    _defineProperty(this, "sendUpdatedPlayersToRoom", function (updatedPlayers, enteredRoomCode) {
      this.io["in"](enteredRoomCode).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.updatePlayers.type, updatedPlayers);
    });
    _defineProperty(this, "getRoom", function (enteredRoomCode) {
      return this.rooms.get(enteredRoomCode);
    });
    _defineProperty(this, "emitAllRoomData", function (enteredRoomCode, socketId) {
      //Problem here is that the socket id changes between refreshes
      //Would have to implement a way to cache the player session
    });
    this.io = io;
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
        console.log(chalk.red("no room was found for ".concat(enteredCode)));
      }
    }
  }, {
    key: "removePlayerFromRoom",
    value: function removePlayerFromRoom(playerId) {
      if (this.playersToRooms.size === 0 || this.playersToRooms.get(playerId) === undefined) {
        return;
      }
      var roomName = this.playersToRooms.get(playerId);
      var playerRoom = this.rooms.get(roomName);
      if (playerRoom) {
        var remainingPlayers = playerRoom.players.filter(function (player) {
          return player.playerId !== playerId;
        });
        playerRoom = _objectSpread(_objectSpread({}, playerRoom), {}, {
          players: remainingPlayers
        });
        if (playerRoom.players.length === 0) {
          this.rooms["delete"](roomName);
        } else {
          this.rooms.set(roomName, playerRoom);
          this.io["in"](roomName).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_0__.updatePlayers.type, remainingPlayers);
        }
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
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameController */ "./server/controllers/gameController.js");
/* harmony import */ var _client_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client/reducers */ "./client/reducers.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




//Handles socket 
var MainController = /*#__PURE__*/_createClass(function MainController(io) {
  var _this = this;
  _classCallCheck(this, MainController);
  this.io = io;
  this.lobbyController = new _lobbyController__WEBPACK_IMPORTED_MODULE_0__["default"](this.io);
  this.gameController = new _gameController__WEBPACK_IMPORTED_MODULE_1__["default"](this.io);
  this.io.on("connection", function (socket) {
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.ioCreateRoom.type, function () {
      socket.join(_this.lobbyController.createRoom(socket.id));
    });
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.ioEnterRoomCode.type, function (enteredRoomCode) {
      _this.lobbyController.joinRoom(enteredRoomCode, socket);
    });
    socket.on("disconnect", function () {
      _this.lobbyController.playerLeft(socket.id);
    });
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.ioPlayerIsReady.type, function (payload) {
      var updatedPlayers = _this.lobbyController.updatePlayerReadiness(payload.playerId);
      _this.lobbyController.rooms.get(payload.roomCode).updatePlayers(updatedPlayers);
      _this.lobbyController.sendUpdatedPlayersToRoom(updatedPlayers, payload.roomCode);
    });
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.ioStartGame.type, function (enteredRoomCode) {
      var room = _this.lobbyController.getRoom(enteredRoomCode);
      if (room) {
        var game = _this.gameController.createGame(room);
        (0,_gameController__WEBPACK_IMPORTED_MODULE_1__.communicateStartOfGame)(io, room.roomCode, game);
      } else {
        console.log('Tried to create a gameController without valid room object passed. Passed to function:');
        console.log(room);
      }
    });
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.ioGetAllData.type, function (enteredRoomCode) {
      if (_this.lobbyController.checkRoomExists(enteredRoomCode)) {
        _this.lobbyController.emitAllRoomData(enteredRoomCode, socket.id);
      } else {
        io.to(socket.id).emit(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.errorOccured.type, 'No Such Room Exists...');
      }
    });
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.ioPlayerAcknowledged.type, function (enteredRoomCode) {
      _this.gameController.setGameWithRoomcode(_this.gameController.checkAllPlayersAcknowledged(enteredRoomCode));
    });
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.ioUpdateSelectedPlayers.type, function (payload) {
      _this.gameController.sendSelectedPlayersToRoom(payload.roomCode, payload.newSelectedPlayers);
    });
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.ioCastToVote.type, function (payload) {
      _this.gameController.updateCastToVote(payload.roomCode, payload.castToVote);
    });
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.ioPlayerCastVote.type, function (payload) {
      _this.gameController.setGameWithRoomcode(_this.gameController.updatePlayerVote(_this.gameController.getGameFromRoomcode(payload.roomCode), payload.selfId, payload.missionPass));
      (0,_gameController__WEBPACK_IMPORTED_MODULE_1__.communicatePlayerCantVote)(io, payload.selfId);
      var allPlayersVoted = _this.gameController.checkAllPlayersVoted(payload.roomCode);
      if (allPlayersVoted) {
        _this.gameController.transitionRound(payload.roomCode);
        var _this$gameController$ = _this.gameController.checkGameOver(_this.gameController.getGameFromRoomcode(payload.roomCode)),
          _this$gameController$2 = _slicedToArray(_this$gameController$, 2),
          gameOver = _this$gameController$2[0],
          knightsWonGame = _this$gameController$2[1];
        if (!gameOver) {} else {
          console.log('Game over');
        }
      }
    });
    socket.on(_client_reducers__WEBPACK_IMPORTED_MODULE_2__.ioVetoMissionHandler.type, function (payload) {
      _this.gameController.updateVetoDecision(payload.roomCode, payload.playerId, payload.vetoMission);
      var vetoStatus = _this.gameController.checkVetoStatus(payload.roomCode);
      if (vetoStatus.allPlayersVoted) {
        _this.gameController.updateMissionVetoed(payload.roomCode, vetoStatus.vetoMission);
      }
    });
  });
});


/***/ }),

/***/ "./server/models/game.js":
/*!*******************************!*\
  !*** ./server/models/game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _models_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/round */ "./server/models/round.js");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room */ "./server/models/room.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Game = /*#__PURE__*/_createClass(function Game(room) {
  _classCallCheck(this, Game);
  _defineProperty(this, "selectRoles", function (players) {
    var playersArray = _toConsumableArray(players);
    var spies = [];
    var knights = [];
    //assign the spies
    while (spies.length < Math.ceil(players.length * 0.33)) {
      var randomIndex = Math.ceil(Math.random() * playersArray.length) - 1;
      spies.push(playersArray[randomIndex]);
      playersArray.splice(randomIndex, 1);
    }
    knights = playersArray; //assign the remaining knights

    return {
      spies: spies,
      knights: knights
    };
  });
  _defineProperty(this, "selectMissionLeader", function (players) {
    var randomIndex = Math.ceil(Math.random() * players.length) - 1;
    return players[randomIndex].playerId;
  });
  _defineProperty(this, "incrementMissionLeader", function (players, previousMissionLeader) {
    var previousLeaderIndex = players.findIndex(function (player) {
      return player.playerId === previousMissionLeader;
    });
    var leaderIsLast = previousLeaderIndex === players.length - 1;
    if (leaderIsLast) {
      return players[0].playerId;
    } else {
      return players[previousLeaderIndex + 1].playerId;
    }
  });
  this.roomCode = room.roomCode;
  this.players = _toConsumableArray(room.players);
  this.numberOfPlayers = this.players.length;
  var selectedRoles = this.selectRoles(this.players);
  this.spies = selectedRoles.spies;
  this.knights = selectedRoles.knights;
  this.rounds = [new _models_round__WEBPACK_IMPORTED_MODULE_0__["default"](), new _models_round__WEBPACK_IMPORTED_MODULE_0__["default"](), new _models_round__WEBPACK_IMPORTED_MODULE_0__["default"](), new _models_round__WEBPACK_IMPORTED_MODULE_0__["default"](), new _models_round__WEBPACK_IMPORTED_MODULE_0__["default"]()];
  this.leader = this.selectMissionLeader(this.players);
  this.showRoles = true;
  this.playersAcknowledgedRole = 0;
  this.castToVote = false;
  this.currentRound = 0;
  this.missionRules = [[2, 3, 2, 3, 3],
  //5 players
  [2, 3, 4, 3, 4],
  //6 players
  [2, 3, 3, 4, 4],
  //7 players
  [3, 4, 4, 5, 5],
  //8 players
  [3, 4, 4, 5, 5],
  //9 players
  [3, 4, 4, 5, 5] //10 players
  ], this.numberOfVetos = 0;
}

//selects 1/3 (rounded up) of players to be spies 
);

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
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Room = /*#__PURE__*/_createClass(
//callingPlayerId: socket.id
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
      playerId: callingPlayerId,
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
});

/***/ }),

/***/ "./server/models/round.js":
/*!********************************!*\
  !*** ./server/models/round.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Round)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Round = /*#__PURE__*/_createClass(function Round() {
  _classCallCheck(this, Round);
  this.playersOnMission = [];
  this.numberOfPass = 0;
  this.numberOfFail = 0;
  this.knightsWon = undefined;
  this.accepted = [];
  this.vetoed = [];
  this.missionWasVetoed = null;
});


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
/* harmony import */ var _controllers_mainController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/mainController */ "./server/controllers/mainController.js");




var publicPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(__dirname, '..', 'public', 'dist');

var expressServer = express__WEBPACK_IMPORTED_MODULE_0___default()();
expressServer.use(express__WEBPACK_IMPORTED_MODULE_0___default()["static"](publicPath));
expressServer.get('*', function (req, res) {
  res.sendFile(path__WEBPACK_IMPORTED_MODULE_3___default().join(publicPath, 'index.html'));
});
var httpServer = (0,http__WEBPACK_IMPORTED_MODULE_2__.createServer)(expressServer);
var io = (0,_socket__WEBPACK_IMPORTED_MODULE_1__["default"])(httpServer);
var port = process.env.PORT || 3000;
httpServer.listen(port, function () {
  console.log("Server running on port ".concat(port));
});
var mainController = new _controllers_mainController__WEBPACK_IMPORTED_MODULE_4__["default"](io);
})();

/******/ })()
;
//# sourceMappingURL=server.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/controllers/mainController.ts":
/*!**********************************************!*\
  !*** ./server/controllers/mainController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MainController = void 0;
const roomController_1 = __webpack_require__(/*! ./roomController */ "./server/controllers/roomController.ts");
class MainController {
    constructor() {
        this.roomController = new roomController_1.RoomController();
    }
    handleSocket(socket) {
        console.log('Handle the socket');
        let roomIdTest = '';
        socket.on("create_room", () => {
            roomIdTest = this.roomController.addRoom(socket);
            console.log(`New room added: ${roomIdTest}`);
            console.log(`Number of rooms currently created is: ${this.roomController.getRoomCount()}`);
        });
        socket.on("enter_roomcode", (data) => {
            console.log(`User submitted roomcode: ${data.roomcode}`);
            console.log(this.roomController.roomExists(data.roomcode));
            socket.emit("enter_roomcode", this.roomController.roomExists(data.roomcode));
        });
    }
}
exports.MainController = MainController;


/***/ }),

/***/ "./server/controllers/roomController.ts":
/*!**********************************************!*\
  !*** ./server/controllers/roomController.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RoomController = void 0;
const roomModel_1 = __webpack_require__(/*! ../models/roomModel */ "./server/models/roomModel.ts");
class RoomController {
    constructor() {
        this.rooms = [];
    }
    addRoom(callingSocket) {
        const newRoom = new roomModel_1.Room(callingSocket);
        this.rooms.push(newRoom);
        return newRoom.roomId;
    }
    getRoomCount() {
        return this.rooms.length;
    }
    roomExists(enteredRoomCode) {
        const room = this.rooms.some(room => room.roomId === enteredRoomCode);
        return room ? true : false;
    }
}
exports.RoomController = RoomController;


/***/ }),

/***/ "./server/models/roomModel.ts":
/*!************************************!*\
  !*** ./server/models/roomModel.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/**
 * @class Model
 *
 * Manages the data of a room.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Room = void 0;
const randomstring_1 = __importDefault(__webpack_require__(/*! randomstring */ "randomstring"));
class Room {
    constructor(callingPlayer) {
        this.roomId = '';
        this.players = new Map();
        this.gameStarted = false;
        this.addPlayer(callingPlayer);
        this.generateRoomCode();
    }
    addPlayer(player) {
        this.players.set(player.id, player);
    }
    generateRoomCode() {
        this.roomId = randomstring_1.default.generate({
            length: 6,
            charset: 'alphanumeric'
        });
    }
}
exports.Room = Room;


/***/ }),

/***/ "./server/server.ts":
/*!**************************!*\
  !*** ./server/server.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const socket_1 = __importDefault(__webpack_require__(/*! ./socket */ "./server/socket.ts"));
const http_1 = __webpack_require__(/*! http */ "http");
const mainController_1 = __webpack_require__(/*! ./controllers/mainController */ "./server/controllers/mainController.ts");
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const publicPath = path_1.default.join(__dirname, '..', 'public');
const expressServer = (0, express_1.default)();
expressServer.use(express_1.default.static(publicPath));
expressServer.get('*', (req, res) => {
    res.sendFile(path_1.default.join(publicPath, 'index.html'));
});
const httpServer = (0, http_1.createServer)(expressServer);
const io = (0, socket_1.default)(httpServer);
const controller = new mainController_1.MainController();
io.on("connection", (socket) => {
    console.log(`New socket connected ${socket.id}`);
    controller.handleSocket(socket);
});
httpServer.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
});


/***/ }),

/***/ "./server/socket.ts":
/*!**************************!*\
  !*** ./server/socket.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
exports["default"] = (httpServer) => {
    console.log('Setting up socket.io server...');
    const io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: "*"
        },
    });
    return io;
};


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=server.js.map
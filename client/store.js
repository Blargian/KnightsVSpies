import { configureStore, createSlice, combineReducers, PayloadAction} from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import {socketMiddleware} from "./socketMiddleware";
import { io } from "socket.io-client";

const socket = io();

const store = configureStore({
    reducer: rootReducer,
    middleware: [socketMiddleware(socket)],
    devTools: true
});
export default store;
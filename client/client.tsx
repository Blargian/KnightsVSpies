import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { io } from "socket.io-client";
import { Provider } from 'react-redux';

const socket = io("http://localhost:8090");

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);


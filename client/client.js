import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Lobby from './Components/Lobby';
import store from './store.js';
import {Provider} from "react-redux";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>}></Route>
        <Route path="/:roomCode/lobby" element={<Lobby/>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


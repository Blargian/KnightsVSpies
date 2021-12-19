import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Lobby from './Components/Lobby';
import Game from './Components/Game';
import store from './store.js';
import {Provider} from "react-redux";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App/>}></Route>
        <Route exact path="/:roomCode/game" element={<Game key="game"/>}></Route>
        <Route exact path="/:roomCode/lobby" element={<Lobby key="lobby"/>}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


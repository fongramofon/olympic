import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './containers/Game/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game></Game>
      </div>
    );
  }
}

export default App;

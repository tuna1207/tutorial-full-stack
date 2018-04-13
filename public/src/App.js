import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Tuna Tech</h1>
        </header>
        <div className="Main-container">
          <img src="https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif" />
        </div>
      </div>
    );
  }
}

export default App;

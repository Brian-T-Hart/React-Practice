import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import Goodbye from './Components/Goodbye';

class App extends Component {
  
  render() {
    return (
      <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My React Practice</h1>
        </header>
        <p className="App-intro">
          This is a practice react app.
        </p>        
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <Goodbye />
      </div>
      </div>

    )
  }}

export default App;

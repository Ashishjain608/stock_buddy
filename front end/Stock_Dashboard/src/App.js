import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Dashboard/Header'

class App extends Component {
  render() {
    return (
      <Header/>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to Ashish Jain</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;

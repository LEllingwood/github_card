import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleClick = () => {
    console.log("this is;", this)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleClick}>Click Me</button>
        </header>
      </div>
    );
  }
}

export default App;

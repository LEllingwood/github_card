import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let fetchLink = "https://api.github.com/users/LEllingwood"

class App extends Component {

  state = {
    user: {},
    active: false,
  }

  handleClick = () => {
    console.log("this is;", this)
    fetch(fetchLink)
      .then(response => response.json())
      .then(data => this.setState({user: data, active: !this.state.active}))
  }

  render() {

    return (
      <div className="App">
      
          <button onClick={this.handleClick}>Toggle User</button>
        
        {this.state.active ?
          <div>{this.state.user.login}
          <br />Followers: {this.state.user.followers} 
          <br />Following: {this.state.user.following} 
          <br /><img src={this.state.user.avatar_url} /></div> 

        : 
        <div>Logged Out</div> }
      </div>
    );
  }
}

export default App;

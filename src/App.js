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
      .then(data => this.setState({user: data.login, active: true}))
  }

  

  render() {

    // const isLoggedIn = this.state.active;
    // let button;

    // if(isLoggedIn){
      // return <greetingInfo />;
        //}
      // return <loginPrompt />
        }
    //  
    
    // separate component called greetingInfo that shows: 
    // data.login
    //   data.avatar_url
    //   data.bio
    //   data.followers_url
    // }

    // separate component called loginPrompt that shows: "Click to log in"

    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleClick}>Log In</button>
        </header>
      </div>
    );
  }
}

export default App;

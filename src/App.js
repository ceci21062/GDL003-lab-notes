import React, { Component } from 'react';
import './App.css';
import  LogIn from "./login";

class App extends Component {
  state={ isSignedIn: false}
  render(){
    return (
      <div className="App">
        <LogIn/>
      </div>
);
}
}

export default App;

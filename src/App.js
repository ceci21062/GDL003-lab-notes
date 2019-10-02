import React, { Component } from 'react';
import './App.css';
import  LogIn from "./login";
//import  readNotes from "./components/readNotes"


class App extends Component {
  state={ isSignedIn: false}

  render(){
    return (
      <div className="App">
      <LogIn/>
      </div>
    )
     
  }
}

export default App;

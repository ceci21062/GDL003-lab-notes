import React, { Component } from 'react';
import './App.css';
import "firebase";
//import StyleFirebaseAuth from "react-firebaseui/StyleFirebaseAuth";


class App extends Component {
  state={ isSignedIn: false}
  render(){
  return (
    <div className="App">
        {this.state.isSignedIn ? (
          <div>SIGNED IN!</div>
        ) : (<div>NOT SIGNED IN!</div>
        )}
        </div>
  );
  }
}

export default App;

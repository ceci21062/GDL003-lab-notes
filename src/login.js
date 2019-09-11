import React, { Component } from 'react';
import "firebase";

class LogIn extends Component {
    state={ isSignedIn: false}
render(){
return (
  <div>
      {this.state.isSignedIn ? (
        <div>SIGNED IN!</div>
      ) : (<div>NOT SIGNED IN!</div>
      )}
      </div>
      );
    }
}
export default LogIn;
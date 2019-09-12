import React, { Component } from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

const firebaseKey = {
    apiKey: "AIzaSyDlmbzfXjhd1R0VZf5p4-rcx5O17wxjXPI",
    authDomain: "lap-note.firebaseapp.com",
    databaseURL: "https://lap-note.firebaseio.com",
    projectId: "lap-note",
    storageBucket: "",
    messagingSenderId: "571913348294",
    appId: "1:571913348294:web:ed40ffc137e4aabcf763c7"
  };

firebase.initializeApp(firebaseKey)

class LogIn extends Component {
    state={ isSignedIn: false}
    uiConfig={
        signInFlow: "popup",
        signInOptions:[
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks:{
            signInSuccess:()=> false
        }
    }

componentDidMount =()=>{
    firebase.auth().onAuthStateChanged(user=>{
        this.setState({isSignedIn: !!user })
    })
}
render(){
return (
  <div>
      {this.state.isSignedIn ? (
        <span>
        <div>SIGNED IN!</div>
        <button onClick= {()=>firebase.auth().signOut()}>Sign Out</button>
        </span>
      ) : (
     <StyledFirebaseAuth
      uiConfig={this.uiConfig}
      firebaseAuth={firebase.auth()}/>
        )}
      </div>
      );
    }
}
export default LogIn;
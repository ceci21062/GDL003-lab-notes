import React, { Component } from 'react';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import {data} from "./components/config"
import ReadNotes from './components/readNotes';
import './App.css';

const basedata= data;
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
        console.log("user",user);
    })
}
render(){
return (
  <div>
      {this.state.isSignedIn ? (
        <span>
        <div className="menu">
        
        <button className="out" onClick= {()=>firebase.auth().signOut()}>Sign Out</button>
        <h1>KAKU</h1>
        <h3> {firebase.auth().currentUser.displayName}</h3>
        </div>
        <div className="readNotes">
            <ReadNotes/>
            </div>
        
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
import firebase from "firebase";

 
 const config={
    apiKey: "AIzaSyDlmbzfXjhd1R0VZf5p4-rcx5O17wxjXPI",
    authDomain: "lap-note.firebaseapp.com",
    databaseURL: "https://lap-note.firebaseio.com",
    projectId: "lap-note",
    storageBucket: "",
    messagingSenderId: "571913348294",
    appId: "1:571913348294:web:ed40ffc137e4aabcf763c7"
}
export const data= firebase.initializeApp(config)
import React, { Component } from 'react';
import './readNotes.css';
import Note from "./note.jsx";
import AddNote from "./addNote";
import "firebase/database";
import {data} from "./config"


class readNotes extends Component {
  constructor(){
    super();
    this.state={
      notes:[
       
      ]
    };

    //data.datebase().ref().child("notes");       
    this.addNote=this.addNote.bind(this);
  }
  addNote(note ){
    let {notes}=this.state;
    notes.push({
      noteId: notes.length+1,     // asi el id  va en aumento conformae se agregan 
      noteContent:note
    });

    this.setState({notes})
  }
  removeNotes(){
    
  }
  render(){
    return(
      <div className = "notesContainer">
        <div className="notesHeader">
        </div>
        <div className="notesBody">
          <ul>
          {
            this.state.notes.map(note=>{
              return(
                <Note
                noteContent={note.noteContent}
                noteId={note.noteId}
                key={note.noteId}
                />
              )
            })
          }
         </ul>
        </div>
        <div className="notesFooter">
          <AddNote addNote={this.addNote}/>
        </div>
      </div>
    );
  }
}

export default readNotes; 
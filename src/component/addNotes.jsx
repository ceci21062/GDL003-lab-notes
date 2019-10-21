import React, { Component } from 'react';
import "./addNotes.css"

class AddNote extends Component{
    constructor(){
        super();
        this.addNote=this.addNote.bind(this);

    }
    addNote(){
        this.props.addNote(this.text.value);  
        this.text.value=" ";                    // se limpia el valor de imput 
        this.text.focus();                      // regresa el cursor al imput 
    }
    render(){
        return(
        <div className="newNote">
        <input placeholder="Nota" ref={input =>{this.text=input;}} type="text"/>
        <button onClick={this.addNote} >New Nota</button>
        </div>
    )

    }
}

export default AddNote; 
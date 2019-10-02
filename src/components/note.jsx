import React, { Component } from 'react';
import "./note.css"

class Note extends Component{
    constructor(props){
        super(props);
        this.noteContent= props.noteContent;
        this.noteId= props.noteId;
    }
    remove(id){
        alert("remove:",id)
    }

    render () {
        return(
        <div className="Note">
            <span onClick= {() =>this.remove(this.noteId)}>&times;</span>
            <p>{this.nodeContent}</p>
        </div>
        )
    }
}


export default Note;
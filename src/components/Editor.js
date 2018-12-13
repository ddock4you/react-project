import React, { Component } from 'react'
import EditorUser from './EditorUser';
import EditorWrite from './EditorWrite';
import './Editor.css';


export default class Editor extends Component {
  render() {
    return (
      <div className="editorContainer">
        <EditorUser />    
        <EditorWrite />        
      </div>
    )
  }
}

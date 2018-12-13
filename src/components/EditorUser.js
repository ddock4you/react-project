import React, { Component } from 'react'

export default class EditorUser extends Component {
  
  render() {
    return (
    <div className="editorUserInfo">
        <div className="editorUserIcon">{this.props.userIcon}</div>
        <div className="editorUserName">{this.props.userName}</div>
    </div>    
    )
  }
}
EditorUser.defaultProps = {
  userIcon: '',
  userName: '홍길동'
}
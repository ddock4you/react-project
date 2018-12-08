/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Comments from "../Comments";

class CommentList extends Component {
  state = {
    cmtInput: '',
    cmtHeartStatus: false,
    cmtHeartCnt: 0,
    cmtReply: false,
    comments: [],
  };

  //댓글영역에서 글을 입력할 때 cmTInput에 value값 전달
  handleChange = (e) => {
    this.setState({
      cmtInput: e.target.value,
    });
  }

  //댓글영역에서 Enter키를 누르면 댓글 입력되게 설정
  enterInput = (e) => {
    if(e.key === 'Enter') {
      this.handleInsert();
    }
  }

  //댓글 추가
  handleInsert = () => {
    const { comments, cmtInput } = this.state;
    if(cmtInput === '' || cmtInput === ' ') {
      alert('댓글 내용을 입력해주세요.');
      return;
    }

    const addCmt = {
      cmtText: cmtInput,
    };

    this.setState({
      comments:[
        ...comments, addCmt
      ],
      cmtInput:''
    });
    
    localStorage.setItem('comments', JSON.stringify(comments));
    console.log(comments);
  }

  //좋아요 버튼 클릭 시 토글 효과(좋아요 아이콘 on/off 및 좋아요 수치+1, -1)
  cmtLike = e => {
    const { cmtHeartStatus, cmtHeartCnt } = this.state;
    this.setState({
      cmtHeartStatus: !cmtHeartStatus
    });

    if (cmtHeartStatus) {
      this.setState({
        //false
        cmtHeartCnt: cmtHeartCnt - 1
      });
    } else {
      this.setState({
        //true
        cmtHeartCnt: cmtHeartCnt + 1
      });
    }
  };

  //답글달기 버튼 클릭 시 토글 효과(답글달기 영역 on/off)
  cmtReplyToggle = e => {
    const { cmtReply } = this.state;
    this.setState({
      cmtReply: !cmtReply
    });
  };

  render() {
    const { cmtHeartStatus, cmtHeartCnt, comments, cmtInput} = this.state;
    const { cmtLike, cmtReplyToggle, handleInsert, handleChange, enterInput } = this;
    //comments에 새로운 배열값이 들어갈 때 마다 새로운 댓글 템플릿 + 새로운 배열값 입력
    const commentArray = comments.map((cmt, index) => (
      <Comments
        comments={cmt.cmtText}
        key={index}
        cmtHeartStatus={cmtHeartStatus}
        cmtHeartCnt={cmtHeartCnt}
        cmtLike={cmtLike}
        cmtReplyToggle={cmtReplyToggle}
      />
      )
    );
    return (
      <div className="detail-comment">
        <div className="detail-comment-header">
          <div className="comment-count">1개의 덧글</div>
          <ul className="comment-sort">
            <li>추천순</li>
            <li>댓글순</li>
          </ul>
        </div>
        <div className="comment-list">
          <ul>
            {commentArray}
          </ul>
          <div className="comment-reply">
            <div className="comment-profile comment-reply-profile">
              <div className="userImage">
                <i className="fas fa-user" />
              </div>
            </div>
            <div className="comment">
              <div className="comment-reply-editer">
                <textarea onKeyPress={enterInput} onChange={handleChange} value={cmtInput}/>
              </div>
              <div className="comment-reply-btnGroup">
                <button onClick={handleInsert}>게시</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentList;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Comments from '../Comments';

class CommentList extends Component {
  state = {
    cmtInput: '',
    cmtHeartStatus: false,
    cmtHeartCnt: 0,
    cmtReply: false,
    comments: [
      { id: 0, cmtText: '1', time: 1544512110899 },
      { id: 1, cmtText: '12', time: 1544512110899 },
      { id: 2, cmtText: '123', time: 1544512110899 },
      { id: 3, cmtText: '1234', time: 1544512110899 },
      { id: 4, cmtText: '12345', time: 1544512110899 }
    ],
    testID: 5
  };

  handleUpdate = (id, cmtData) => {
    const { comments } = this.state;

    this.setState({
      comments: comments.map(cmt => {
        if (comments.id === id) {
          return {
            id,
            ...cmtData,
          };
        }
        return cmt;
      })
    });
    console.log(cmtData);
    console.log(comments);
  };

  handleRemove = id => {
    const { comments } = this.state;
    this.setState({
      comments: comments.filter(comments => comments.id !== id)
    });
  };

  //댓글영역에서 글을 입력할 때 cmTInput에 value값 전달
  handleChange = e => {
    this.setState({
      cmtInput: e.target.value
    });
  };

  //댓글영역에서 Enter키를 누르면 댓글 입력되게 설정
  enterInput = e => {
    if (e.key === 'Enter') {
      this.handleInsert();
    }
  };

  //임시 ID값 생성
  plusId = () => {
    const { testID } = this.state;
    this.setState({
      testID: testID + 1
    });
  };

  //댓글 추가
  handleInsert = () => {
    const { comments, cmtInput, testID } = this.state;
    const { plusId } = this;
    if (cmtInput === '' || cmtInput === ' ') {
      alert('댓글 내용을 입력해주세요.');
      return;
    }

    plusId();

    const addCmt = {
      id: testID,
      cmtText: cmtInput,
      time: new Date().getTime()
    };

    this.setState({
      comments: [...comments, addCmt],
      cmtInput: ''
    });

    // localStorage.setItem('comments', JSON.stringify(comments));
    // console.log(comments);
  };

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

  hahaha = list => {};

  //   $(window).on('load', function () {
  //     load('#js-load', '4');
  //     $("#js-btn-wrap .button").on("click", function () {
  //         load('#js-load', '4', '#js-btn-wrap');
  //     })
  // });

  // function load(id, cnt, btn) {
  //     var girls_list = id + " .js-load:not(.active)";
  //     var girls_length = $(girls_list).length;
  //     var girls_total_cnt;
  //     if (cnt < girls_length) {
  //         girls_total_cnt = cnt;
  //     } else {
  //         girls_total_cnt = girls_length;
  //         $('.button').hide()
  //     }
  //     $(girls_list + ":lt(" + girls_total_cnt + ")").addClass("active");
  // }

  componentDidMount() {
    // 댓글이 일정 개수 이상 되면 '댓글 더보기' 버튼을 표시
    const list = document.querySelector('.comment-list');
    const listLi = list.childNodes[0].childNodes;
    const infiniteBtn = document.createElement('div');

    infiniteBtn.innerHTML = '댓글 더보기';
    infiniteBtn.className = 'more-cntReply';
    infiniteBtn.onClick = this.hahaha(list, 2);
    //console.log(listLi.length);

    if (listLi.length > 4) {
      list.appendChild(infiniteBtn);
      //console.log(new Date().getTime());
    }
  }
  render() {
    const { cmtHeartStatus, cmtHeartCnt, comments, cmtInput } = this.state;
    const {
      cmtLike,
      cmtReplyToggle,
      handleInsert,
      handleChange,
      handleRemove,
      handleUpdate,
      enterInput
    } = this;
    //comments에 새로운 배열값이 들어갈 때 마다 새로운 댓글 템플릿 + 새로운 배열값 입력
    const commentArray = comments.map(cmt => (
      <Comments
        cmt={cmt}
        //comments={cmt.cmtText}
        key={cmt.id}
        //time = {cmt.time}
        cmtHeartStatus={cmtHeartStatus}
        cmtHeartCnt={cmtHeartCnt}
        cmtLike={cmtLike}
        cmtReplyToggle={cmtReplyToggle}
        cmtRemove={handleRemove}
        cmtUpdate={handleUpdate}
      />
    ));

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
          <ul>{commentArray}</ul>
        </div>
        <div className="comment-reply">
          <div className="comment-profile comment-reply-profile">
            <div className="userImage">
              <i className="fas fa-user" />
            </div>
          </div>
          <div className="comment">
            <div className="comment-reply-editer">
              <textarea
                onKeyPress={enterInput}
                onChange={handleChange}
                value={cmtInput}
              />
            </div>
            <div className="comment-reply-btnGroup">
              <button onClick={handleInsert}>게시</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentList;

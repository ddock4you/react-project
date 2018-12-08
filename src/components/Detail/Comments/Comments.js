import React, { Component, Fragment } from "react";

class Comments extends Component {
  render() {
    const {
      cmtReplyToggle,
      cmtLike,
      cmtHeartStatus,
      cmtHeartCnt,
      comments
    } = this.props;
    return (
      <Fragment>
        <li>
          <div className="comment-profile">
            <div className="userImage">
              <i className="fas fa-user" />
            </div>
          </div>
          <div className="comment">
            <div className="comment-header">사용자 아이디</div>
            <div className="comment-content">{comments}</div>
            <div className="comment-footer">
              <div className="comment-footer-left">
                <span className="comment-date">18시간</span>
                <span className="comment-reply-btn" onClick={cmtReplyToggle}>
                  답글 달기
                </span>
              </div>
              <div className="comment-footer-right">
                <div className="comment-like" onClick={cmtLike}>
                  <i
                    className={cmtHeartStatus ? "fas fa-heart" : "far fa-heart"}
                  />
                  <span name="cmtHeartCnt">{cmtHeartCnt}</span>
                </div>
                <div className="comment-count">
                  <i className="far fa-comment" />
                  <span>0</span>
                </div>
                <div className="comment-other">
                  <i>...</i>
                </div>
              </div>
            </div>
            {/* <ul>
                  <li>
                    <div className="comment-profile">
                      <div className="userImage">
                        <i className="fas fa-user" />
                      </div>
                    </div>
                    <div className="comment">
                      <div className="comment-header">fdgsfd</div>
                      <div className="comment-content">dsfadf</div>
                      <div className="comment-footer">
                        <div className="comment-footer-left">
                          <span className="comment-date">18시간</span>
                          <span className="comment-reply-btn">답글 달기</span>
                        </div>
                        <div className="comment-footer-right">
                          <div className="comment-like">
                            <i className="far fa-heart" />
                            <span>0</span>
                          </div>
                          <div className="comment-other">
                            <i>...</i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="comment-reply">
                      <div className="comment-profile comment-reply-profile">
                        <div className="userImage">
                          <i className="fas fa-user" />
                        </div>
                      </div>
                      <div className="comment">
                        <div className="comment-reply-editer">
                          <textarea />
                        </div>
                        <div className="comment-reply-btnGroup">
                          <button>기</button>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul> */}
          </div>
        </li>
      </Fragment>
    );
  }
}

export default Comments;

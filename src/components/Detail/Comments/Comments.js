import React from 'react';

const Comments = () => {
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
                    <li>
                        <div className="comment-profile">
                            <div className="userImage">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="comment-header">fdgsfd</div>
                            <div className="comment-content">dsfadf</div>
                            <div className="comment-footer">
                                <div className="comment-footer-left">
                                    <span className="comment-date">18시간</span>
                                    <span className="comment-reply">답글 달기</span>
                                </div>
                                <div className="comment-footer-right">
                                    <div className="comment-like">
                                        <i className="far fa-heart"></i>
                                        <span>0</span>
                                    </div>
                                    <div className="comment-count">
                                        <i className="far fa-comment"></i>
                                        <span>0</span>
                                    </div>
                                    <div className="comment-other">
                                        <i>...</i>
                                    </div>
                                </div>
                            </div>
                            <ul>
                                <li>
                                    <div className="comment-profile">
                                        <div className="userImage">
                                            <i className="fas fa-user"></i>
                                        </div>
                                    </div>
                                    <div className="comment">
                                        <div className="comment-header">fdgsfd</div>
                                        <div className="comment-content">dsfadf</div>
                                        <div className="comment-footer">
                                            <div className="comment-footer-left">
                                                <span className="comment-date">18시간</span>
                                                <span className="comment-reply">답글 달기</span>
                                            </div>
                                            <div className="comment-footer-right">
                                                <div className="comment-like">
                                                    <i className="far fa-heart"></i>
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
                                                <i className="fas fa-user"></i>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <div className="comment-reply-editer">
                                                <textarea></textarea>
                                            </div>
                                            <div className="comment-reply-btnGroup">
                                                <button>답글달기</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="comment-reply">
                    <div className="comment-profile comment-reply-profile">
                        <div className="userImage">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <div className="comment">
                        <div className="comment-reply-editer">
                            <textarea></textarea>
                        </div>
                        <div className="comment-reply-btnGroup">
                            <button>게시</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
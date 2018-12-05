import React, { Fragment } from 'react';

const Info = () => {
    return (
        <Fragment>
            <div className="detail-userInfo">
                <div className="detail-userInfo-img">
                    <hr/>
                    <div className="userImage">
                        <i className="fas fa-user"></i>
                    </div>
                    <hr/>
                </div>
                <div className="detail-userInfo-bottom">
                    <div className="user-name">asdfasg</div>
                    <div className="user-hobby">책 ・ 게임  ・ 영확감상</div>
                    <div className="user-intro">매주 200 만명이 받아보는 멘탈관리 컨텐츠</div>
                    <button>+팔로우</button>
                </div>
            </div>
            <div className="detail-count">
                <div className="detail-count-like">
                    <div className="detail-count-like-img">
                        <div className="userImage">
                            <i className="fas fa-user"></i>
                        </div>
                    </div>
                    <span>좋아요 2개</span>
                </div>
                <div className="detail-count-share">보내기 2회</div>
            </div>
        </Fragment>
    );
};

export default Info;
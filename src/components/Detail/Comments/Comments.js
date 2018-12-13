import React, { Component, Fragment } from "react";


class Comments extends Component {
	state = {
		modify: false,
		cmtModify: ""
	};

	//댓글 작성 시간 계산
	calculTime = wroteTime => {
		const lastTime = wroteTime;
		const nowTime = new Date().getTime();
		const second = Math.floor((nowTime - lastTime) / 1000);
		let convertTime = "";

		if (second > 60) {
			const minute = Math.floor(second / 60);
			if (minute > 60) {
				const hour = Math.floor(minute / 60);
				if (hour > 24) {
					const day = Math.floor(hour / 24);
					if (day > 30) {
						const month = Math.floor(day / 31);
						if (month > 12) {
							const year = Math.floor(month / 12);
							convertTime = `${year}년 전`;
						} else {
							convertTime = `${month}개월 전`;
						}
					} else {
						convertTime = `${day} 일 전`;
					}
				} else {
					convertTime = `${hour}시간 전`;
				}
			} else {
				convertTime = `${minute}분 전`;
			}
		} else {
			convertTime = `${second}초 전`;
		}

		return convertTime;
	};


	handleToggle = () => {
		const { modify, cmtModify } = this.state;
		const { cmt, cmtUpdate } = this.props;

		if (modify) {
			cmtUpdate(cmt.id, {
				cmtText: cmtModify
			});

			//console.log({ cmtModify });
		} else {
			this.setState({
				cmtModify: cmt.cmtText
			});
		}

		this.setState({
			modify: !modify
		});
	};

	handleChange = e => {
		const { name, value } = e.target;

		this.setState({
			[name]: value
		});
	};

	render() {
		const { modify, cmtModify } = this.state;
		const {
			cmt,
			cmtReplyToggle,
			cmtLike,
			cmtHeartStatus,
			cmtHeartCnt,
			cmtRemove
		} = this.props;
		const { handleToggle, handleChange } = this;
		return (
			<Fragment>
				<li>
					<div className="comment-profile">
						<div className="userImage">
							<i className="fas fa-user" />
						</div>
					</div>
					{modify ? (
						<div className="comment-modify">
							<textarea
								name="cmtModify"
								onChange={handleChange}
								value={cmtModify}
							/>
							<div className="comment-modify-btnGroup">
								<button onClick={handleToggle}>취소</button>
								<button className="btn-confirm">답글 달기</button>
							</div>
						</div>
					) : (
						<div className="comment">
							<div className="comment-header">사용자 아이디</div>
							<div className="comment-content">{cmt.cmtText}</div>
							<div className="comment-footer">
								<div className="comment-footer-left">
									<span className="comment-date">
										{this.calculTime(cmt.time)}
									</span>
									<span className="comment-reply-btn" onClick={cmtReplyToggle}>
										답글 달기
									</span>
									<span className="comment-reply-btn" onClick={handleToggle}>
										수정
									</span>
									<span
										className="comment-reply-btn"
										onClick={() => {
											cmtRemove(cmt.id);
											console.log(cmt.id);
										}}
									>
										삭제
									</span>
								</div>
								<div className="comment-footer-right">
									<div className="comment-like" onClick={cmtLike}>
										<i
											className={
												cmtHeartStatus ? "fas fa-heart" : "far fa-heart"
											}
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
						</div>
					)}
				</li>
			</Fragment>
		);
	}
}

export default Comments;

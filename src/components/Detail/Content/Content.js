import React, { Fragment } from 'react';

const Content = () => {
    return (
        <Fragment>
            <div className="detail-editer">
                <h3>가나다라마바사</h3>
                <div className="detail-editer-content">
                    작성자가 작성한 내용이 표시되는 곳<br/>
                    asdfasdg<br/>
                    fdgdsfg<br/>
                    dfsdfgsdf<br/>
                </div>
            </div>
            <div className="detail-tag">
                #가나다&nbsp;#가나다&nbsp;#가나다&nbsp;#가나다&nbsp;
            </div>
        </Fragment>
    );
};

export default Content;
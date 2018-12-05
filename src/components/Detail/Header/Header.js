import React from 'react';

const Header = () => {
    return (
        <div className="detail-header">
            <div className="userImage">
                <i className="fas fa-user"></i>
            </div>
            <div className="detail-header-info">
                <div>이름</div>
                <div className="write-date">
                    3시간 전 1,000+ Views
                </div>
                <i>...</i>
            </div>
        </div>
    );
};

export default Header;
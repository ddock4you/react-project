import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <header>
            <div className="inner">
                <h1 className="logo"><i className="fab fa-windows"></i></h1>
                <form className="search">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="검색어를 입력하세요."></input>
                </form>
                <nav>
                    <ul className="nav-pc">
                        <li>
                            <i className="far fa-edit"></i>
                            새 카드 쓰기
                        </li>
                        <li>
                            <i className="fas fa-comment-dots"></i>
                        </li>
                        <li>
                            <i className="fas fa-bell"></i>
                        </li>
                        <li>
                            <i className="fas fa-user-circle"></i>
                        </li>
                    </ul>
                    <ul className="nav-mobile">
                        <li>
                            <i className="fas fa-comment-dots"></i>
                        </li>
                        <li>
                            <i className="fas fa-thumbtack"></i>
                        </li>
                        <li>
                            <i className="far fa-edit"></i>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react';
import Mykeword from './Mykeword';
import Recommend from './Recommend';
import Card from './Card';
import './css/Main.css';
import './css/K_Reset.css';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h3 className="MainCompoTitle">이곳은 Main컴포넌트</h3>
        </div>
        <div className="wrap">        
          <div className="card lcon">
            <Card />
          </div>
          <div className="right_wrap">
            <div className="top rcon">
              <div className="in_wrap">
                <div className="in_title_wrap">
                  <span>내 관심사</span>
                  <a href="#">더 보기</a>
                </div>
                <div>
                  <ul>
                  <Mykeword />
                  </ul>
                </div>
              </div>
            </div>
            <div className="bottom rcon">
              <div className="in_wrap">
              <div className="in_title_wrap">
                  <span>추천 관심사</span>
                  <Recommend />
                </div>
              </div>
            </div>
            <div className="info">
              <ul>
                <li><a href="#">소개&nbsp;·&nbsp;</a></li>
                <li><a href="#">채용&nbsp;·&nbsp;</a></li>
                <li><a href="#">문의하기&nbsp;·&nbsp;</a></li>
                <li><a href="#">약관 및 정책</a></li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;

/** Card
 * 사용자가 작성한 카드를 폼에 그려줄 컴포넌트
 */

import React, { Component, Fragment } from 'react';
import './css/Card.css';
import { Link } from 'react-router-dom';

class Card extends Component {
  state = {
    id: '',
    time: '',
    title: '누워서 TV보며 하체 살빼기',
    copy: '허벅지 안쪽 살 빼기 좋고...',
    img:[]
  }

  /**
   * img 배열로 돌려서 순서대로 뿌려줘야 함
   * 배열을 돌릴 함수 생성
   */

  render(){
    return(
      <Fragment>
        <h3>{this.state.title}</h3>
        <div>
          <p>허벅지 안쪽 살 빼기 좋고...</p>
        </div>
        <div>
          <Link to="/detail"><div className="card">
            <p>테스트중</p>
              {/* <img src={this.state.img}></img> */}
            </div>
          </Link>    
          </div>
        
      </Fragment>
    )
  }
}

export default Card;
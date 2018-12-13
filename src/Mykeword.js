/** Liform
 * 최초 회원가입시 사용자에게서 받은 keyword 값을 보여줄 컴포넌트
 */ 

import React, { Component, Fragment } from 'react';

class Mykeword extends Component {
  state = {
    // 임시 데이터 삽입
    mykeyword : '카페베네',
    number : '2000',
  }

  /**
   * 이벤트 발생 조건: 컴포넌트가 최초 및 리렌더링 됬을시 
   * 이벤트 실행: 서버에서 받아온 데이터를 그려줄 함수가 필요함
   */ 

  render(){
    return(
      <Fragment>
        <li>
          <p>#{this.state.mykeyword}</p>
          <p>사람 {this.state.number}만명</p>
        </li>
        <li>
          <p>#{this.state.mykeyword}</p>
          <p>사람 {this.state.number}만명</p>
        </li>
      </Fragment>
    )
  }
}

export default Mykeword;
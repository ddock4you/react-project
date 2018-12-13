/** Recommend
 * 랜덤(?), 최근 클릭수 높은 키워드대로든 '추천 키워드'를 그려줄 컴포넌트
 */

import React, { Component, Fragment } from 'react'

class Recommend extends Component{
  state = {
    // 임시 데이터 삽입
    keword : [
      { 
        word: '낮디(자인)저개(발공부)흨흨',
        link: 'https://www.naver.com'
      },
      { 
        word: '졸려집보내죠',
        link: 'https://www.daum.com'
      }
    ]
  }

  render(){
    const { link } = this.state.keword;
    return(
      <Fragment>
        <div>
          {/* this.state.keword[0] 이 부분을 어떻게 처리하지? */}
          <a href={link}>#{this.state.keword[0].word}</a>
        </div>
      </Fragment>
    )
  }
}

export default Recommend;
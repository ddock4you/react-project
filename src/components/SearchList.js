import React, { Component } from 'react';
import SearchCard from './SearchCard';
import './SearchList.css';


export default class SearchList extends Component {
  state = {
    searchList: [
      {
        thumbnail: "http://image.cine21.com/resize/cine21/poster/2018/0518/12_06_54__5afe434e1f297[H800-].PNG",
        title: "보헤미안 랩소디",
        contents: "보헤미안 랩소디 설명 영역",
        nicname: "홍길동"
      },
      {
        thumbnail: "https://img.sbs.co.kr/newsnet/etv/upload/2018/10/10/30000614708_700.jpg",
        title: "국가부도의 날",
        contents: "국가부도의 날 설명 영역",
        nicname: "김철수"
      }
    ]
  }
  render() {
    return (
      <div className="searchList">
        {this.state.searchList.map((card, index) => {
          return <SearchCard thumbnail={card.thumbnail} title={card.title} contents={card.contents} nicname={card.nicname} key={index}/>
        })}
      </div>
    )
  }
}



import React, { Component } from 'react';
import './Detail.scss';
import Sidebar from './Sidebar';
import DetailHeader from './Header';
import DetailContent from './Content';
import Info from './Info';
import Comments from './CommentList';
import Close from './Close';


class Detail extends Component {

    

    render() {
        return (
            <div className="detail-wrap">
                <Close />
                <Sidebar />
                <div className="detail">
                    <DetailHeader />
                    <DetailContent />
                    <Info />
                    <Comments />
                </div>
            </div>
        );
    }
}

export default Detail;  
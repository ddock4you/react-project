import React from 'react';
import './Detail.scss';
import Sidebar from './Sidebar';
import DetailHeader from './Header';
import DetailContent from './Content';
import Info from './Info';
import Comments from './Comments';
import Close from './Close';


const Detail = () => {

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


export default Detail;  
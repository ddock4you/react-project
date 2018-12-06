import React, { Component } from 'react';

class Close extends Component { 
    
    closeDetail = () => {
        const detail = document.querySelector('.App');
        detail.innerHTML = '';
    }

    render(){
        const { closeDetail } = this;

        return (
            <div className="detail-close" onClick={closeDetail}>
                <span></span>
                <span></span>
            </div>
        );
    }
};

export default Close;
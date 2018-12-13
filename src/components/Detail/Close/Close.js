import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Close extends Component { 
    
    closeDetail = () => {
        const detail = document.querySelector('.App');
        detail.innerHTML = '';
    }

    render(){
        //const { closeDetail } = this;

        return (
            <Link to="/"> {/* history 기능을 해야할듯 */}
                <div className="detail-close" >
                    <span></span>
                    <span></span>
                </div>
            </Link>
        );
    }
};

export default Close;
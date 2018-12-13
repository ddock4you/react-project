import React, { Component } from 'react';
import './mobileFooter.scss';

class MobileFooter extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <i className="fas fa-home"></i>
                    </li>
                    <li>
                        <i className="fas fa-hashtag"></i>
                    </li>
                    <li>
                        <i className="fas fa-bell"></i>
                    </li>
                    <li>
                        <i className="fas fa-user"></i>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default MobileFooter;
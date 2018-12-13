import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
            <footer>
                <ul>
                    <li>
                        <i className="far fa-heart"></i>
                        5
                    </li>
                    <li>
                        <i className="far fa-comment"></i>
                        Comment
                    </li>
                    <li>
                        <i className="far fa-share-square"></i>
                        7
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;
import React from 'react';
import './Letter.scss';

import LetterImage from './assets/Letter.png';

class Letter extends React.Component {
    render() {
        return (
            <div className="letter-page-wrapper">
                <div className="letter-bg"></div>
                <div className="letter-wrapper">
                    <img className="letter-image" src={LetterImage}/>
                    <div className="letter-content">
                        <div className="letter-header">
                            <div className="letter-close" onClick={this.props.onClose}>{"Close"}</div>
                            <div className="letter-date">{this.props.info.date}</div>
                        </div>
                        <div className="letter-art-wrapper"><img className="letter-art" src={this.props.info.image}/></div>
                        <div className="letter-text">{this.props.info.text}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Letter;
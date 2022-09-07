import React from 'react';
import './Envelope.scss';

import Letters from './Letters';
import Letter from './Letter';

import EnvelopeImage from './assets/Envelope.png';
import OpenEnvelopeImage from './assets/OpenEnvelope.png';

class Envelope extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            showLetter: false,
            letter: null
        }
    }

    showLetter() {
        let letter = Letters[Math.floor(Math.random() * Letters.length)];
        this.setState({letter});
        this.setState({showLetter: true});
    }

    closeLetter() {
        this.setState({showLetter: false});
        this.setState({letter: null})
    }

    render() {
        const showLetter = this.state.showLetter;
        let letterShownClass = showLetter ? " seen" : "";

        return (
            <div className="envelope-wrapper">
                <div className={"envelope" + letterShownClass}>
                    <div className="envelope-image-wrapper" onClick={this.showLetter.bind(this)}>
                        <img className="envelope-image" src={EnvelopeImage}/>
                        <img className="envelope-open-image" src={OpenEnvelopeImage}/>
                    </div>
                    {showLetter ? <Letter info={this.state.letter} onClose={this.closeLetter.bind(this)}/> : <></>}
                </div>
            </div>
        );
    }
}

export default Envelope;
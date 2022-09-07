import React from 'react';

import Envelope from './Envelope';
import './Page.scss';

import CircleType from 'circletype';

class Page extends React.Component {

    componentDidMount() {
        const title = new CircleType(document.getElementById('title-curved'));
        title.radius(1000);
        const subtitle = new CircleType(document.getElementById('subtitle-curved'));
        subtitle.radius(1000).dir(-1);
    }

    render() {
        return (
            <div className="page-wrapper">
                <div className="page-title" id="title-curved">Happy Anniversary Mindy {"<3"}</div>
                <div className="page-subtitle" id="subtitle-curved">Here's a couple letters :)</div>
                <Envelope/>
            </div>
        );
    }
}

export default Page;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Letter from './Letter';
import Messages from './Letters';
import Page from './Page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Letter info={Messages[0]}/>
    <Page/>
);
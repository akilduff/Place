import React from 'react';
import ReactDOM from 'react-dom';
import Place from './place.jsx';

const currentView = window.location.pathname;

ReactDOM.render(<Place view={currentView}/>, document.getElementById('Place'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, NavLink, HashRouter } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';

import NavBar from './components/navbar.jsx'

class Place extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      places: ['connect', 'focus', 'checkin', 'gather']
    };

    this.handleView = this.handleView.bind(this);
  }

  componentDidMount() {
    // console.log('Current View: ', this.props.places)
  }

  render() {
    return (
      <>
        <NavBar places={this.state.places}/>
      </>
    )
  }
}

ReactDOM.render(<Place/>, document.getElementById('Place'));

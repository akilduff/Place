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
      view: 'home'
    };

    this.handleView = this.handleView.bind(this);
  }

  componentDidMount() {
    console.log('Current View: ', this.props.view)
  }

  handleView(e) {
    let wantedView = e.target.id;
    this.setState({
      view: wantedView
    })
    e.preventDefault();
  }

  render() {
    return (
      <>
        <NavBar/>
      </>
    )
  }
}

ReactDOM.render(<Place/>, document.getElementById('Place'));

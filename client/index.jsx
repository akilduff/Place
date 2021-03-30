import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Landing from './components/landing.jsx'
import About from './components/about.jsx'

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
    if (this.state.view === 'home') {
      return (
        <>
          <Header/>
          <Landing/>
          <Footer handleView={this.handleView}/>
        </>
      )
    } else if (this.state.view === 'about') {
      return (
        <>
          <About/>
          <Footer handleView={this.handleView}/>
        </>
      )
    }
  }
}

ReactDOM.render(<Place/>, document.getElementById('Place'));

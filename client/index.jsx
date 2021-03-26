import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Landing from './components/landing.jsx'

class Place extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
    };

  }

  setTerm(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  render() {
    return (
      <>
        <Header/>
        <Landing/>
        <Footer/>
      </>
    )
  }
}

ReactDOM.render(<Place />, document.getElementById('app'))

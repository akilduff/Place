import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
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
      <div>
        Hello World
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))

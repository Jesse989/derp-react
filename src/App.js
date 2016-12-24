import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import Nav from './components/Nav';
import Derps from './components/Derps';
import {samplePayload} from './samplePayload';
import * as derpApi from './api/derpApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload: []
    };
  }

  componentDidMount() {
    derpApi.getDerps( (payload) => {
      this.setState({
        payload: payload
      });
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Derps
          posts={this.state.payload} />
      </div>
    );
  }
}

export default App;

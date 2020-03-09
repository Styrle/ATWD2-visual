import React, { Component } from 'react';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <div className="Home">
      <h1>Hello {this.props.name}</h1>
      </div>
    );
  }
}

export default Home;

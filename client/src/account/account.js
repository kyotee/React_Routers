import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Account extends Component {
  render() {
    return (
      <div>
        <h1>This is {this.props.match.params.user}'s account.</h1>
        <Link to="/"><button>Go Back to Home Page</button></Link>
      </div>
    )
  }
}

export default Account;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
  render() {
    return (
      <div>
        <h1>This will be the sign in form.</h1>
        <Link to="/"><button>Go Back to Home Page</button></Link>
        <Link to={"/account/"+"teddy"}><button>Sign In as Teddy without Password</button></Link>
      </div>
    )
  }
}

export default SignInForm;

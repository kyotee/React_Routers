import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
  render() {
    return (
    	<div>
	      	<h1>This will be the sign up form.</h1>
	       	<Link to="/"><button>Go Back to Home Page</button></Link>
	    </div>
    )
  }
}

export default SignUpForm;

import React, { Component } from 'react';
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { Link } from 'react-router-dom';
import './cards.css';

class Cards extends Component {
  render() {
    return (
      <Card>
        <CardImage className="img-fluid" src="/img/bg-masthead.jpg" waves />
        <CardBody>
            <CardTitle>This could be you!</CardTitle>
            <CardText>This could be you enjoying a nice hike with great views! Sign up today or sign in to see new updates!</CardText>
            <div id="container">
              <Link to="/signup"><Button className="button-size">Sign up</Button></Link>
              <Link to="/signin"><Button className="button-size">Sign in</Button></Link>
            </div>
        </CardBody>
      </Card>
    )
  }
}

export default Cards;

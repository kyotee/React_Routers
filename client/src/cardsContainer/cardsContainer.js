import React, { Component } from 'react';
import './cardsContainer.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';
import Cards from '../cards/cards';
import './cardsContainer.css';

class CardsContainer extends Component {
  render() {
    return (
    	<div className="container">
    		<div className="card-resize">
	    		<Cards/>
    		</div>
	    </div>
    );
  }
}

export default CardsContainer;

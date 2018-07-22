import React, { Component } from 'react';
import './cardsContainer.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbreact/dist/css/mdb.css';
import Cards from '../cards/cards';

class CardsContainer extends Component {
  render() {
    return (
    	<div>
    		<Cards/>
    		<Cards/>
    		<Cards/>
	    </div>
    );
  }
}

export default CardsContainer;

import React from 'react';
import ReactDOM from 'react-dom';

import CardsContainer from './cardsContainer/cardsContainer';
import Cards from './cards/cards';
// import App from './App';
// import Navigation from './components/Navigation';
// import Posts from './components/posts/Posts';
// import Item from './components/Item';
// import Transaction from './components/Transaction';
import PageNotFound from './pageNotFound/pageNotFound';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render((
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={CardsContainer}/>
			</Switch>
		</div>
	</BrowserRouter>),
	document.getElementById('head-container')
);

registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import CardsContainer from './cardsContainer/cardsContainer';
import SignInForm from './signInForm/signInForm';
import SignUpForm from './signUpForm/signUpForm';
import Account from './account/account';
import PageNotFound from './pageNotFound/pageNotFound';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render((
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={CardsContainer}/>
				<Route path="/signup" component={SignUpForm}/>
				<Route path="/signin" component={SignInForm}/>
				<Route path="/account/:user" render={props => <Account {...props} /> }/>
				<Route component={PageNotFound}/>
			</Switch>
		</div>
	</BrowserRouter>),
	document.getElementById('head-container')
);

registerServiceWorker();

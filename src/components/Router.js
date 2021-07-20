import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from '../shared/auth';

// pages
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import PinDetail from '../pages/PinDetail';
import AddPin from '../pages/AddPin';

const Router = () => {
	return (
		<Switch>
			<Route path='/' component={Auth(Home, null)} exact />
			<Route path='/main' component={Auth(Signup, false)} exact />
			<Route path='/pin/:id' component={Auth(PinDetail, null)} exact />
			<Route path='/pin-bulider' component={Auth(AddPin, null)} exact />
		</Switch>
	);
};

export default Router;

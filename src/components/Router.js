import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from '../shared/auth';

// pages
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import PinDetail from '../pages/PinDetail';

const Router = () => {
	return (
		<Switch>
			<Route path='/' component={Auth(Home, false)} exact />
			<Route path='/signup' component={Signup} exact />
			<Route path='/pin/:id' component={PinDetail} exact />
		</Switch>
	);
};

export default Router;

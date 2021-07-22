import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from '../shared/auth';

// pages
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import PinDetail from '../pages/PinDetail';
import PinBoard from '../pages/PinBoard';
import AddPin from '../pages/AddPin';

const Router = () => {
	return (
		<Switch>
			<Route path='/' component={Auth(Home, true)} exact />
			<Route path='/main' component={Auth(Signup, false)} exact />
			<Route path='/pin/:id' component={Auth(PinDetail, true)} exact />
			<Route path='/board' component={Auth(PinBoard, true)} exact />
			<Route path='/pin-builder' component={Auth(AddPin, true)} exact />
		</Switch>
	);
};

export default Router;

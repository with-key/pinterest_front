import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home';
import Signup from '../pages/Signup';

const Router = () => {
	return (
		<Switch>
			<Route path='/' component={Home} exact />
			<Route path='/signup' component={Signup} exact />
		</Switch>
	);
};

export default Router;

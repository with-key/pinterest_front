import React from 'react';
import { Switch, Route } from 'react-router-dom';

// pages
import Home from '../pages/Home';

const Router = () => {
	return (
		<Switch>
			<Route path='/' component={Home} exact />
		</Switch>
	);
};

export default Router;

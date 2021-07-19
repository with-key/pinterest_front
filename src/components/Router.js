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
<<<<<<< HEAD
			{/* 두번째 파라미터
				null (비로그인, 로그인 모두 접속 가능)
				true (로그인만 접속 가능)
				false (비로그인만 접속 가능)
				*/}

			<Route path='/' component={Auth(Home, null)} exact />
			<Route path='/signup' component={Auth(Signup, false)} exact />
			<Route path='/pin/:id' component={Auth(PinDetail, null)} exact />
=======
			<Route path='/' component={Home} exact />
			{/* <Route path='/' component={Auth(Home, false)} exact /> */}
			<Route path='/signup' component={Signup} exact />
			<Route path='/pin/:id' component={PinDetail} exact />
>>>>>>> 3082d17fc3a5e8e3807a5e7026ad25f541e38cf1
		</Switch>
	);
};

export default Router;

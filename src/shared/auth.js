/* eslint-disable import/no-anonymous-default-export */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default (SpecialComponent, option, adminRoute = null) => {
	const AuthenticateCheck = (props) => {
		const isLogin = useSelector((store) => store.user.isLogin);

		useEffect(() => {
			if (!isLogin && option) {
				props.history.push('/login');
			}
		}, []);

		return <SpecialComponent />;
	};

	return AuthenticateCheck;
};

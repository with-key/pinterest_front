/* eslint-disable import/no-anonymous-default-export */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userAcions } from '../modules/user';
import { useDispatch } from 'react-redux';

export default (SpecialComponent, option) => {
	const AuthenticateCheck = (props) => {
		const dispatch = useDispatch();

		const accessToken = document.cookie.split('=')[1];
		const userId = localStorage.getItem('userId');

		const isLogin = userId !== null && accessToken !== undefined ? true : false;
		console.log(isLogin);

		useEffect(() => {
			dispatch(userAcions.__setLogin());
			if (!isLogin && option) {
				props.history.push('/main');
			} else if (isLogin && !option) {
				props.history.push('/');
			}
		}, []);

		return <SpecialComponent {...props} />;
	};

	return AuthenticateCheck;
};

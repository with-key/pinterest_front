/* eslint-disable import/no-anonymous-default-export */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userAcions } from '../modules/user';
import { useDispatch } from 'react-redux';

export default (SpecialComponent, option) => {
	const AuthenticateCheck = (props) => {
		const dispatch = useDispatch();
		const isLogin = useSelector((store) => store.user.isLogin);

		// const useName = localStorage.getItem('userId');
		// console.log(useName);

		// useEffect(() => {
		// 	dispatch(userAcions.__setLogin());
		// 	if (!isLogin && option) {
		// 		props.history.push('/main');
		// 	}
		// }, []);

		return <SpecialComponent {...props} />;
	};

	return AuthenticateCheck;
};

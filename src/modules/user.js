import { createAction, handleActions } from 'redux-actions';
import jwt_decode from 'jwt-decode';
import { userApi } from '../shared/api';
import { setCookie } from '../shared/cookie';

// action
const SIGNUP = 'user/SIGNUP';
const LOGIN = 'user/LOGIN';
const SET_LOGIN = 'user/SET_LOGIN';

// initState
const initState = {
	user: {
		userName: '',
		userImage: '',
	},
	isLogin: false,
};

// action creator
const signup = createAction(SIGNUP, (userInfo) => ({ userInfo }));
const login = createAction(LOGIN, (userInfo) => ({ userInfo }));
const setLogin = createAction(SET_LOGIN, (userInfo) => ({ userInfo }));

// Thunk function
const __signup =
	(userInfo) =>
	async (dispatch, getState, { history }) => {
		console.log(userInfo);
		try {
			const { data } = userApi.signup(userInfo);
			dispatch(signup(userInfo));
		} catch (e) {
			console.log(e);
		}
	};

const __login =
	(userInfo) =>
	async (dispatch, getState, { history }) => {
		console.log(userInfo);
		try {
			const { data } = await userApi.login(userInfo);
			const decoded = jwt_decode(data);
			dispatch(login(decoded.sub));
			localStorage.setItem('userId', decoded.sub);
			setCookie('token', data, 1);
			history.replace('/');
		} catch (e) {
			window.alert(e);
		}
	};

const __setLogin =
	() =>
	(dispatch, getState, { history }) => {
		const userId = localStorage.getItem('userId');
		const token = document.cookie;

		if (userId !== null && token !== '') {
			dispatch(setLogin());
		}
	};

// reducer
const user = handleActions(
	{
		[LOGIN]: (state, action) => {
			console.log(action);
			return {
				...state,
				isLogin: true,
				user: {
					...state.user,
					userName: action.payload.userInfo,
				},
			};
		},
		[SET_LOGIN]: (state, action) => {
			return {
				...state,
				isLogin: true,
			};
		},
	},

	initState,
);

export const userAcions = {
	__signup,
	__login,
	__setLogin,
};
export default user;

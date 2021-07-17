import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:4000',
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
	},
});

// interceptors
instance.interceptors.request.use((config) => {
	// const accessToken = document.cookie.split('=')[1];
	// config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
	return config;
});

export const userApi = {
	signup: (userInfo) => instance.post('/user', userInfo),
	login: (userInfo) => instance.post('/login', userInfo),
};

export const pinApi = {};

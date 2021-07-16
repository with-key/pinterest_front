import axios from 'axios';

const instance = axios.create({
	// baseURL: '',
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

export const api = {
	postPin: () => instance.get('url'),
};

import axios from 'axios';

const instance = axios.create({
	// baseURL: 'http://3.35.139.51',
	baseURL: 'http://localhost:4000',
	headers: {
		'content-type': 'application/json;charset=UTF-8',
		accept: 'application/json,',
	},
});

// interceptors
instance.interceptors.request.use((config) => {
	const accessToken = document.cookie.split('=')[1];
	config.headers.common['Authorization'] = `${accessToken}`;
	return config;
});

export const userApi = {
	signup: (userInfo) => instance.post('/user/register', userInfo),
	login: (userInfo) => instance.post('/user/login', userInfo),
};

export const pinApi = {
	getPinList: (page, limit) => instance.get(`/pin?page=${page}&limit=${limit}`), // page & limit; for infinite scroll
	getPin: (pinid) => instance.get(`/pin/${pinid}`),
	addPin: (pin) => instance.post('/pin', pin),
};

export const commentApi = {
	getCommentList: (pin_id) => instance.get(`/comment?pinId=${pin_id}`),
	postComment: (pin_id, comment) =>
		instance.post(`/comment?pinId=${pin_id}`, comment),
	deleteComment: (comment_id) => instance.delete(`/comment/${comment_id}`),
	editComment: (comment_id, comment) =>
		instance.put(`/comment/${comment_id}`, comment),
};

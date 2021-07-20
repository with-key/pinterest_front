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

export const pinApi = {
	getPinList: () => instance.get('/pin'),
	getPin: (pinid) => instance.get(`/pin/${pinid}`),
};

export const commentApi = {
	// getCommentList: (pinid) => instance.get(`/pin/comment?pinId=${pinid}`),
	getCommentList: (pin_id) => instance.get(`/comment?pinId=${pin_id}`), // test
	postComment: (pin_id, comment) => instance.post(`/comment?pinId=${pin_id}`, comment ),
	deleteComment: (comment_id) => instance.delete(`/comment/${comment_id}`),
	editComment: (comment_id, comment) => instance.put(`/comment/${comment_id}`, comment),
};
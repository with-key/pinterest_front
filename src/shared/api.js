import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://3.35.139.51',
	// baseURL: 'http://localhost:4000',
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
	getPinList: (page, size) =>
		instance.get(`/api/pin/page?page=${page}&size=${size}`),
	getPin: (pinId) => instance.get(`/pin/${pinId}`),
	addPin: (pin) => instance.post('/pin', pin),
	pinAddToBoard: (pinId, boardId) => {
		console.log(pinId, boardId);
		instance.post(`/pin/board/${pinId}?boardId=${boardId}`);
	},
};

export const commentApi = {
	getCommentList: (pinId, page, size) =>
		instance.get(`/pin/comment/${pinId}?page=${page}&size=${size}`),
	postComment: (pinId, comment) =>
		instance.post(`/pin/comment/${pinId}`, comment),
	deleteComment: (commentId) => instance.delete(`/pin/comment/${commentId}`),
	editComment: (commentId, comment) =>
		instance.put(`/pin/comment/${commentId}`, comment),
};

export const boardApi = {
	getBoard: () => instance.get('/board'),
	addBoard: (board) => {
		instance.post('/board', board);
	},
};

export const likeApi = {
	postLike: (commentId, pinId) =>
		instance.post(`/like/${commentId}?pinId=${pinId}`),
	deleteLike: (commentId) => instance.delete(`/like/${commentId}`),
};

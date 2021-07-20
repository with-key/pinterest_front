import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { commentApi } from '../shared/api';

// action
const GET_COMMENT_LIST = 'comment/GET_COMMENT_LIST';
const POST_COMMENT = 'comment/POST_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const EDIT_COMMENT = 'comment/EDIT_COMMENT';

// initState
const initState = {
	list: [],
	comment: {
		commentContent: '',
		createdAt: '2021-07-19T06:44:10.590Z',
		id: 0,
		likeNum: 0,
		liken: false,
		pinId: 1,
		user: {
			password: '1234',
			userAge: 0,
			userId: 0,
			userImage: 'https://wallpaperaccess.com/full/3501969.png',
			userName: '',
		}
	},
	isLogin: false,
};

// action creator
const getCommentList = createAction(GET_COMMENT_LIST, (comment_list) => ({comment_list}));
const postComment = createAction(POST_COMMENT, (comment) => ({comment}));
const deleteComment = createAction(DELETE_COMMENT, (comment_id) => ({comment_id}));
const editComment = createAction(EDIT_COMMENT, (comment_id, comment) => ({comment_id, comment}));

// Thunk function
const __getCommentList = (pinid) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await commentApi.getCommentList(pinid);
			dispatch(getCommentList(data));
		} catch (e) {
			console.log(e);
		}
	};

const __postComment = (pinid, comment) => 
	async (dispatch, getState, { history }) => {
		try {
			const content ={
				commentContent: comment,
				likeNum: 0,
				liken: false,
				pinId: pinid,
				createdAt: '2021-07-19T06:44:10.590Z',
				user: { // 테스트코드 : 서버 연결 후 수정
					userName: '안녕',
					password: '1234',
					userImage: 'https://wallpaperaccess.com/full/3501969.png',
					userAge: 3
				}
			}
			const { data } = await commentApi.postComment(pinid, content);
			dispatch(postComment(data));
		}	catch (e) {
			console.log(e)
		};
}

const __deleteComment = (comment_id) => 
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await commentApi.deleteComment(comment_id);
			dispatch(deleteComment(comment_id));
		}	catch (e) {
			console.log(e)
		};
}

const __editComment = (comment_id, modifiedComment, previousComment) => 
	async (dispatch, getState, { history }) => {
		try {
			const content ={
				...previousComment,
				commentContent: modifiedComment,
			}
			const { data } = await commentApi.editComment(comment_id, content);
			dispatch(editComment(comment_id, data));
		}	catch (e) {
			console.log(e)
		};
}

// reducer
const comment = handleActions(
	{
		[GET_COMMENT_LIST]: (state, action) => {
			return {
				...state,
				list: action.payload.comment_list,
			}
		},
		[POST_COMMENT]: (state, action) => {
			return {
				...state,
				list: state.list.concat(action.payload.comment),
			};
		},
		[DELETE_COMMENT]: (state, action) => {
			return {
				...state,
				list: state.list.filter((comment) => comment.id !== action.payload.comment_id)
			};
		},
		[EDIT_COMMENT]: (state, action) => {
			console.log(action.payload.comment_id)
			const data = action.payload.comment;
			return {
				...state,
				list: state.list.map((comment, index) => {
					if (comment.id === data.id) {
						return (state.list[index] = data);
					} else {
						return comment;
					}
				}),
			};			
		},
	},
	initState,
);

export const commentActions = {
	__getCommentList,
	__postComment,
	__deleteComment,
	__editComment,
};

export default comment;
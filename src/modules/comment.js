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
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({commentId}));
const editComment = createAction(EDIT_COMMENT, (commentId, comment) => ({commentId, comment}));

// Thunk function
const __getCommentList = (pinId) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await commentApi.getCommentList(pinId);
			dispatch(getCommentList(data));
		} catch (e) {
			console.log(e);
		}
	};

const __postComment = (pinId, comment) => 
	async (dispatch, getState, { history }) => {
		try {
			const content ={ commentContent: comment }
			const { data } = await commentApi.postComment(pinId, content);
			dispatch(postComment(data));
		}	catch (e) {
			console.log(e)
		};
}

const __deleteComment = (commentId) => 
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await commentApi.deleteComment(commentId);
			dispatch(deleteComment(commentId));
		}	catch (e) {
			console.log(e)
		};
}

const __editComment = (commentId, modifiedComment) => 
	async (dispatch, getState, { history }) => {
		try {
			const content ={
				commentContent: modifiedComment,
			}
			const { data } = await commentApi.editComment(commentId, content);
			dispatch(editComment(commentId, data));
			console.log(data)
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
				list: state.list.filter((comment) => comment.commentId !== action.payload.commentId)
			};
		},
		[EDIT_COMMENT]: (state, action) => {
			const data = action.payload.comment;
			return {
				...state,
				list: state.list.map((comment, index) => {
					if (comment.commentId === data.commentId) {
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
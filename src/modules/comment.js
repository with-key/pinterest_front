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
	paging: { page: 1, next: null, size: 5 }, 
};

// action creator
const getCommentList = createAction(GET_COMMENT_LIST, (commentList, totalComments) => ({commentList, totalComments}));
const postComment = createAction(POST_COMMENT, (comment) => ({comment}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({commentId}));
const editComment = createAction(EDIT_COMMENT, (commentId, comment) => ({commentId, comment}));

// Thunk function
const __getCommentList = (pinId, page = 1, size = 10) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await commentApi.getCommentList(pinId, page, size);
			console.log(data)
			const totalComments = data.totalElements
			dispatch(getCommentList(data.content, totalComments));
			// const next = getState().comment.paging.next;
			// const _page = getState().comment.paging.page;
			// console.log(_page)
			// if ( _page=== false && next === false ) return;
			// dispatch(loading(true));
			
			// const { data } = await pinApi.getPinList(_page, size);

			// const totalPages = data.totalPages;
			// let paging = {
			// 	page: data.content.length < size ? false: _page + 1,
			// 	next: _page === totalPages ? false : true,
			// 	size: size,
			// };

			// dispatch(getPinList(data.content, paging));

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
		[GET_COMMENT_LIST]: (state, action) => produce(state, (draft) => {
			draft.list= action.payload.commentList // 수정
			draft.totalComments = action.payload.totalComments;
			draft.isLoading = false;
			}
		),
		// => {
		// 	return {
		// 		...state,
		// 		list: action.payload.commentList,
		// 		totalComments: action.payload.
		// 	}
		// },
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
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { commentApi, likeApi } from '../shared/api';

// action
const GET_COMMENT_LIST = 'comment/GET_COMMENT_LIST';
const GET_NEXT_COMMENT_LIST = 'comment/GET_NEXT_COMMENT_LIST';
const POST_COMMENT = 'comment/POST_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const EDIT_COMMENT = 'comment/EDIT_COMMENT';
// like action
const POST_LIKE = 'like/POST_LIKE';
const DELETE_LIKE = 'like/DELETE_LIKE';

// initState
const initState = {
	list: [],
	isLogin: false,
	paging: { page: 1, next: null, size: 5 }, 
};

// action creator
const getCommentList = 
	createAction(GET_COMMENT_LIST, (commentList, totalComments, paging) => ({commentList, totalComments, paging}));
const getNextCommentList = 
createAction(GET_NEXT_COMMENT_LIST, (commentList, totalComments, paging) => ({commentList, totalComments, paging}));
const postComment = createAction(POST_COMMENT, (comment) => ({comment}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({commentId}));
const editComment = createAction(EDIT_COMMENT, (commentId, comment) => ({commentId, comment}));
// like action creator
const postLike = createAction(POST_LIKE, (commentId) => ({commentId}));
const deleteLike = createAction(DELETE_LIKE, (commentId) => ({commentId}));

// Thunk function
const __getCommentList = (pinId, page = 1, size = 3) =>
	async (dispatch, getState, { history }) => {
		try {
			const next = getState().comment.paging.next;
			const _page = getState().comment.paging.page;
			const { data } = await commentApi.getCommentList(pinId, _page, size);
			const totalComments = data.totalElements;
			if ( _page=== false && next === false ) return;
			const totalPages = data.totalPages;
			let paging = {
				page: data.content.length < size ? false: _page + 1,
				next: _page === totalPages ? false : true,
				size: size,
			};
			dispatch(getCommentList(data.content, totalComments, paging));
			console.log(paging)

		} catch (e) {
			console.log(e);
		}
	};

const __getNextCommentList = (pinId, page, size = 3) =>
async (dispatch, getState, { history }) => {
	try {
		const next = getState().comment.paging.next;
		const _page = getState().comment.paging.page;
		const { data } = await commentApi.getCommentList(pinId, page, size);
		const totalComments = data.totalElements;
		if ( _page=== false && next === false ) return;
		console.log(data)
		const totalPages = data.totalPages;
		let paging = {
			page: data.content.length < size ? false: _page + 1,
			next: _page === totalPages ? false : true,
			size: size,
		};

		dispatch(getNextCommentList(data.content, totalComments, paging));
		console.log(paging)
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

//----- like middleware -----//
const __postLike = (commentId, pinId) => 
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await likeApi.postLike(commentId, pinId);
			dispatch(postLike(commentId));
		}	catch (e) {
			console.log(e)
		};
}

const __deleteLike = (commentId) => 
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await likeApi.deleteLike(commentId);
			dispatch(deleteLike(commentId));
		}	catch (e) {
			console.log(e)
		};
}

// reducer
const comment = handleActions(
	{
		[GET_COMMENT_LIST]: (state, action) => produce(state, (draft) => {
			draft.list = action.payload.commentList; // ??????
			draft.totalComments = action.payload.totalComments;
			draft.paging = action.payload.paging;
			}
		),
		[GET_NEXT_COMMENT_LIST]: (state, action) => produce(state, (draft) => {
			draft.list.push(...action.payload.commentList); // ??????
			draft.totalComments = action.payload.totalComments;
			draft.paging = action.payload.paging;
			}
		),
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

		//----- like reducers -----//
		[POST_LIKE]: (state, action) => produce(state, (draft) => {
			let _index = draft.list.findIndex((c) => c.commentId === action.payload.commentId);
			draft.list[_index].liken = true;
			draft.list[_index].likeNum += 1;
		}
	),
		[DELETE_LIKE]: (state, action) => produce(state, (draft) => {
			let _index = draft.list.findIndex((c) => c.commentId === action.payload.commentId);
			draft.list[_index].liken = false;
			draft.list[_index].likeNum -= 1;
		}),

	},
	initState,
);

export const commentActions = {
	__getCommentList,
	__getNextCommentList,
	__postComment,
	__deleteComment,
	__editComment,
	__postLike,
	__deleteLike,
};

export default comment;
import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { commentApi } from '../shared/api';

// action
const GET_COMMENT_LIST = 'comment/GET_COMMENT_LIST';
const GET_NEXT_COMMENT_LIST = 'comment/GET_COMMENT_LIST';
const POST_COMMENT = 'comment/POST_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';
const EDIT_COMMENT = 'comment/EDIT_COMMENT';

// initState
const initState = {
	list: [],
	isLogin: false,
	paging: { page: 1, next: null, size: 5 }, 
	nextPaging: { page: 2, next: null, size: 5 }
};

// action creator
const getCommentList = createAction(
	GET_COMMENT_LIST, (commentList, totalComments, nextPaging) => ({commentList, totalComments, nextPaging}));
const getNextCommentList = createAction(
	GET_NEXT_COMMENT_LIST, (commentList, totalComments, nextPaging) => ({commentList, totalComments, nextPaging}));
const postComment = createAction(POST_COMMENT, (comment) => ({comment}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({commentId}));
const editComment = createAction(EDIT_COMMENT, (commentId, comment) => ({commentId, comment}));

// Thunk function
const __getCommentList = (pinId) =>
	async (dispatch, getState, { history }) => {
		try {
			console.log(initState.paging.page)
			const next = getState().comment.paging.next;
			const _page = getState().comment.paging.page;
			const { data } = await commentApi.getCommentList(pinId, initState.paging.page, initState.paging.size);
			
				
			if ( _page=== false && next === false ) return;

			const totalPages = data.totalPages;
			let nextPaging = {
				page: data.content.length < initState.paging.size ? false: _page + 1,
				next: _page === totalPages ? false : true,
				size: initState.paging.size,
			};

			const totalComments = data.totalElements
			dispatch(getCommentList(data.content, totalComments, nextPaging));
			
		} catch (e) {
			console.log(e);
		}
	};

const __getNextCommentList = (pinId, page, size = 5) =>
	async (dispatch, getState, { history }) => {
		try {
			const next = getState().comment.nextPaging.next;
			const _page = getState().comment.nextpaging?.page;
			const { data } = await commentApi.getCommentList(pinId, page, size);
			
			if ( _page === false && next === false ) return;

			const totalPages = data.totalPages;
			let nextPaging = {
				page: data.content.length < size ? false: page + 1,
				next: page === totalPages ? false : true,
				size: size,
			};

			const totalComments = data.totalElements
			dispatch(getCommentList(data.content, totalComments, nextPaging));
			
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

const __deleteComment = (commentId, restOfComment) => 
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await commentApi.deleteComment(commentId);
			dispatch(deleteComment(commentId));
			dispatch(restOfComment( restOfComment -1 ))
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
			draft.list = action.payload.commentList;
			draft.totalComments = action.payload.totalComments;
			draft.nextPaging = action.payload.nextPaging;
			}
		),
		[GET_NEXT_COMMENT_LIST]: (state, action) => produce(state, (draft) => {
			draft.list.push(...action.payload.commentList);
			draft.totalComments = action.payload.totalComments;
			draft.nextPaging = action.payload.nextPaging;
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
	},
	initState,
);

export const commentActions = {
	__getCommentList,
	__getNextCommentList,
	__postComment,
	__deleteComment,
	__editComment,
};

export default comment;
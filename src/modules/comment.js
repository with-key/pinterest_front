import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { commentApi } from '../shared/api';

// action
const GET_COMMENT_LIST = 'comment/GET_COMMENT_LIST';

// initState
const initState = {
	list: [],
	isLogin: false,
};

// action creator
const getCommentList = createAction(GET_COMMENT_LIST, (comment_list) => ({comment_list}));

// Thunk function
const __getCommentList =
	(pinid) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await commentApi.getCommentList(pinid);
			dispatch(getCommentList(data));
		} catch (e) {
			console.log(e);
		}
	};

// reducer
const comment = handleActions(
	{
		[GET_COMMENT_LIST]: (state, action) => {
			return {
				...state,
				list: action.payload.comment_list,
			}
		},
	},
	initState,
);

export const commentActions = {
	__getCommentList,
};

export default comment;
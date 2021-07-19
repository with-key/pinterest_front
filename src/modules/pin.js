import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { pinApi } from '../shared/api';

// action
const GET_PINLIST = 'pin/GET_PINLIST';

// initState
const initState = {
	list: [],
	isLogin: false,
};

// action creator
export const getPinList = createAction(GET_PINLIST, (pinList) => ({pinList}));

// Thunk function
export const __getPinList =
	(props) =>
	async (dispatch) => {
		try {
			const { data } = await pinApi.getPinList();
			console.log(data);
			dispatch(getPinList(data));
		} catch (e) {
			console.log(e);
		}
	};

// reducer
const pin = handleActions(
	{
		[GET_PINLIST]: (state, action) => {
			return { ...state,
				list: action.payload.articles,// 리덕스액션을 사용하면 action 내에 있는 데이터를 무조건 'payload'로 불러옵니다.
		}}
	},

	initState,
);

export default pin;

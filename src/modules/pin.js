import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { pinApi } from '../shared/api';

// action
const GET_PINLIST = 'pin/GET_PINLIST';
const GET_PIN = 'pin/GET_PIN';

// initState
const initState = {
	list: [],
	isLogin: false,
};

// action creator
export const getPinList = createAction(GET_PINLIST, (pin_list) => ({pin_list}));
export const getPin = createAction(GET_PIN, (pin_id) => ({pin_id}));

// Thunk function
export const __getPinList =
	(props) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await pinApi.getPinList();
			dispatch(getPinList(data));
		} catch (e) {
			console.log(e);
		}
	};

// reducer
const pin = handleActions(
	{
		[GET_PINLIST]: (state, action) => {
			return {
				...state,
				list: action.payload.pin_list,
			}
		}	
	},
	initState,
);

export default pin;

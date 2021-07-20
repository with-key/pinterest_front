import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { pinApi } from '../shared/api';

// action
const GET_PINLIST = 'pin/GET_PINLIST';
const ADD_FORM = 'pin/ADD_FORM';
const ADD_PIN = 'pin/ADD_PIN';

// initState

const initState = {
	list: [],
	isLogin: false,
	pin: null,
};

// action creator
// const addForm = createAction(ADD_FORM, (newForm) => ({ newForm }));
export const getPinList = createAction(GET_PINLIST, (pinList) => ({
	pinList,
}));
export const addPin = createAction(ADD_PIN, (pin) => ({ pin }));

// Thunk function
export const __getPinList = (props) => async (dispatch) => {
	try {
		const { data } = await pinApi.getPinList();
		dispatch(getPinList(data));
	} catch (e) {
		console.log(e);
	}
};
export const __addPin = () => (dispatch) => {
	try {
	} catch (e) {}
};

// reducer
const pin = handleActions(
	{
		[GET_PINLIST]: (state, action) => {
			return {
				...state,
				list: action.payload.articles,
			};
		},
	},

	initState,
);

export default pin;

import { createAction, handleActions } from 'redux-actions';
import { pinApi } from '../shared/api';

// action
const GET_PINLIST = 'pin/GET_PINLIST';
const ADD_FORM = 'pin/ADD_FORM';
const ADD_PIN = 'pin/ADD_PIN';
const GET_PIN_LIST = 'pin/GET_PIN_LIST';
const GET_PIN = 'pin/GET_PIN';

// initState

const initState = {
	list: [],
	selectedPin: {},
	isLogin: false,
	pin: null,
};

// action creator

export const getPinList = createAction(GET_PIN_LIST, (pinList) => ({
	pinList,
}));
export const addPin = createAction(ADD_PIN, (pin) => ({ pin }));
export const getPin = createAction(GET_PIN, (pin) => ({ pin }));

// Thunk function

export const __addPin = () => (dispatch) => {
	try {
	} catch (e) {}
};

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

// 상세페이지: 핀 목록과 선택된 핀 상세 동시에 유지 필요
const __getPin =
	(pinId) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await pinApi.getPin(pinId);
			dispatch(getPin(data));
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
				list: action.payload.articles,
			};
		},
		[GET_PIN_LIST]: (state, action) => {
			return {
				...state,
				list: action.payload.pinList,
			};
		},
		[GET_PIN]: (state, action) => {
			return {
				...state,
				selectedPin: {
					...action.payload.pin,
					userName: action.payload.pin.user.userName,
				},
			};
		},
	},
	initState,
);

export const pinActions = {
	__getPinList,
	__getPin,
};

export default pin;

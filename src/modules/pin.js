import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { pinApi } from '../shared/api';

// action
const GET_PINLIST = 'pin/GET_PINLIST';
const GET_PIN = 'pin/GET_PIN';

// initState
const initState = {
	list: [],
	selectedPin: {},
	isLogin: false,
};

// action creator
const getPinList = createAction(GET_PINLIST, (pin_list) => ({pin_list}));
const getPin = createAction(GET_PIN, (pin) => ({pin}));

// Thunk function
const __getPinList =
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
	(pin_id) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await pinApi.getPin(pin_id);
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
				list: action.payload.pin_list,
			}
		},
		
		[GET_PIN]: (state, action) => {
			console.log(action.payload.pin.user.userName)
			return {
				...state,
				selectedPin: {
					...action.payload.pin, 
					userName: action.payload.pin.user.userName 
				}
			}
		},

	},
	initState,
);

export const pinActions = {
	__getPinList,
	__getPin,
};

export default pin;
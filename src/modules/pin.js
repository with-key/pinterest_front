import { createAction, handleActions } from 'redux-actions';
import { pinApi } from '../shared/api';

// action

const ADD_PIN = 'pin/ADD_PIN';
const GET_PIN_LIST = 'pin/GET_PIN_LIST';
const GET_PIN = 'pin/GET_PIN';

// initState

const initState = {
	list: [],
	selectedPin: {},
	pin: {},
};

// action creator
export const getPinList = createAction(GET_PIN_LIST, (pinList) => ({
	pinList,
}));
export const addPin = createAction(ADD_PIN, (pin) => ({ pin }));
export const getPin = createAction(GET_PIN, (pin) => ({ pin }));

// Thunk function

export const __addPin = (contents) => (dispatch, getState) => {
	try {
		const { imgUrl } = getState().image;
		const willDispatchContents = {
			...contents,
			pinImage: imgUrl,
		};
		console.log(willDispatchContents);
		// api post
		const { data } = pinApi.addPin(willDispatchContents);
		console.log(data);
		// dispatch(addPin(willDispatchContents));
	} catch (e) {
		console.log(e);
	}
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
		[ADD_PIN]: (state, action) => {
			return {
				...state,
				list: state.list.concat(action.payload.pin),
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

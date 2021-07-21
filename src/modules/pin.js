import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { pinApi } from '../shared/api';

// action

const ADD_PIN = 'pin/ADD_PIN';
const GET_PIN_LIST = 'pin/GET_PIN_LIST';
const GET_PIN = 'pin/GET_PIN';
// infinite scroll
const LOADING = 'pin/LOADING';

// initState
// infinite scroll paging
const initState = {
	list: [],
	selectedPin: {},
	paging: { page: 1, next: null, size: 10 }, 
	isLoading: false,
	isLogin: false,
	pin: null,
};

// action creator

export const getPinList = createAction(GET_PIN_LIST, (pinList, paging) => ({
	pinList,
	paging,
}));
// infinite scroll
export const loading = createAction(LOADING, (isLoading) => ({ isLoading }));
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

// 핀 목록 페이지 ; infinite scroll
export const __getPinList =
	(page = 1, size = 10) =>
	async (dispatch, getState, { history }) => {
		try {
			const next = getState().pin.paging.next;
			const _page = getState().pin.paging.page;
			if ( _page=== false && next === false ) return;
			dispatch(loading(true));
			console.log(`서버 요청 page: ${_page}, size: ${size} `)
			const { data } = await pinApi.getPinList(_page, size);
			console.log(data.content, data);
			const totalPages = data.totalPages;
			let paging = {
				page: data.content.length < size ? false: _page + 1,
				next: _page === totalPages ? false : true,
				size: size,
			};
			// const next = getState().pin.paging.next;
			// const _page = getState().pin.paging.page;
			// if ( _page=== false && next === false ) return;
			// dispatch(loading(true));
			// console.log(`서버 요청 page: ${page}, size: ${size} `)
			// const { data } = await pinApi.getPinList(page, size);
			// console.log(data.content, data);
			// const totalPages = data.totalPages;
			// let paging = {
			// 	page: page === totalPages ? false: page + 1,
			// 	next: page === totalPages ? false : true,
			// 	size: size,
			// };
			dispatch(getPinList(data.content, paging));
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
		[GET_PIN_LIST]: (state, action) => produce(state, (draft) => {
				draft.list.push(...action.payload.pinList);
        draft.paging = action.payload.paging;
				console.log(draft.paging)
				draft.isLoading = false;
			}
		),
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

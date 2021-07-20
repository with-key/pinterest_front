import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// action
const UPLOAD = 'image/UPLOAD';
const PREVIEW = 'image/PREVIEW';

// action creator
export const insert = createAction(UPLOAD, (text) => ({ text }));
export const preview = createAction(PREVIEW, (imgUrl) => ({ imgUrl }));

// Thunk function
export const __insert =
	(text, { history }) =>
	async (dispatch) => {
		try {
			// const data = await
			dispatch(insert(text));
		} catch (e) {}
	};

export const __preview = () => (dispatch) => {};

const initState = {
	pin: '',
	avatar: '',
	preview: '',
};

// reducer
const image = handleActions(
	{
		[UPLOAD]: (state, action) => ({
			...state,
		}),
		[PREVIEW]: (state, action) => {
			console.log(action.payload);
			return {
				...state,
				preview: action.payload.imgUrl,
			};
		},
	},
	initState,
);

export default image;

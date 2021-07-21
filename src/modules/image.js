import { createAction, handleActions } from 'redux-actions';

// action
const UPLOAD = 'image/UPLOAD';
const PREVIEW = 'image/PREVIEW';

// action creator
export const preview = createAction(PREVIEW, (preview) => ({ preview }));
export const uploadImgeToS3 = createAction(UPLOAD, (imgUrl) => ({ imgUrl }));

// Thunk function
const initState = {
	pin: '',
	avatar: '',
	preview: '',
	imgUrl: '',
};

// reducer
const image = handleActions(
	{
		[UPLOAD]: (state, action) => ({
			...state,
			imgUrl: action.payload.imgUrl,
		}),
		[PREVIEW]: (state, action) => {
			return {
				...state,
				preview: action.payload.preview,
			};
		},
	},
	initState,
);

export default image;

import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

// action
const INSERT = 'todos/INSERT';

// action creator
export const insert = createAction(INSERT, (text) => ({}));

// Thunk function
export const __insert =
	(text, { history }) =>
	async (dispatch) => {
		try {
			// const data = await
			dispatch(insert(text));
		} catch (e) {}
	};

// reducer
const todos = handleActions(
	{
		[INSERT]: (state, action) => ({
			...state,
			todos: state.todos.concat(action.payload), // 리덕스액션을 사용하면 action 내에 있는 데이터를 무조건 'payload'로 불러옵니다.
		}),
	},
	{ todos: [] },
);

export default todos;

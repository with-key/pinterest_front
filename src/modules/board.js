import { createAction, handleActions } from 'redux-actions';
import { boardApi } from '../shared/api';

const LOAD = 'board/LOAD';
const ADD = 'board/ADD';

const loadBoard = createAction(LOAD, (boardList) => ({ boardList }));
const addBoard = createAction(ADD, (board) => ({ board }));

const __loadBoard =
	() =>
	async (dispacth, getState, { history }) => {
		const { data } = await boardApi.getBoard();
		dispacth(loadBoard(data));
	};

const __addBoard =
	(boardTitle) =>
	(dispacth, getState, { history }) => {
		const data = boardApi.addBoard({ boardTitle });
	};

const initState = {
	boardList: [],
	board: null,
};

const board = handleActions(
	{
		[LOAD]: (state, action) => {
			console.log(action);
			return {
				...state,
				boardList: action.payload.boardList,
			};
		},
		[ADD]: (state, action) => {
			console.log(action);
			return {
				...state,
				boardList: state.boardList.concat(action.payload.board),
			};
		},
	},
	initState,
);

export const boardActions = {
	loadBoard,
	addBoard,
	__loadBoard,
	__addBoard,
};

export default board;

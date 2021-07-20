// redux
import { createStore, combineReducers, applyMiddleware } from 'redux'; // 리듀서 메서드
import user from './user'; // 리듀서
import pin from './pin';
import image from './image';

// middleware
import thunk from 'redux-thunk'; // 썽크
import logger from 'redux-logger'; // 로거

// redux router
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
	image,
	user,
	pin,
	router: connectRouter(history),
});

const middleware = [thunk.withExtraArgument({ history }), logger]; // 썽크함수에서 { history } 쓰려면 반드시 필요함
const store = createStore(rootReducer, applyMiddleware(...middleware)); // 스토어

export default store;

import React, { useEffect } from 'react';
import Router from './components/Router';
import GlobalStyles from './components/GlobalStyles';
import { userAcions } from './modules/user';
import { useDispatch } from 'react-redux';

const App = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userAcions.__setLogin());
	}, []);

	return (
		<>
			<GlobalStyles />
			<Router />
		</>
	);
};

export default App;

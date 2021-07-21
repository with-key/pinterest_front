import React, { useEffect } from 'react';
import styled from 'styled-components';
//----- elements & components -----//
import Template from '../components/Template';
import PinList from '../components/PinList';
//----- redux -----//
import { useDispatch } from 'react-redux';
import { pinActions } from '../modules/pin';

const Home = ({ history }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(pinActions.__getPinList());
	}, []);

	return (
		<Template history={history}>
			<PinList history={history} />
		</Template>
	);
};

export default Home;

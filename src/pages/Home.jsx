import React, { useEffect } from 'react';
import styled from 'styled-components';

// components
import Template from '../components/Template';
import PinList from '../components/PinList';

// redux
import { useDispatch } from 'react-redux';
import { pinActions } from '../modules/pin';

const Home = ({ history }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(pinActions.__getPinList());
	}, []);

	return (
		<Template pd='80px 0 0 0'>
			{/* <Spacer /> */}
			<PinList history={history} />
		</Template>
	);
};

// const Spacer = styled.header`
// 	top: 80px;
// 	width: 100%;
// 	margin-top: 80px;
// `;

export default Home;

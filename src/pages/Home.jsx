import React, {useEffect} from 'react';
import styled from 'styled-components';
import ImgUploader from '../components/ImgUploader';

// components
import Template from '../components/Template';
import Header from '../components/Header';
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
		<Template>
			<Header history={history} />
			<Spacer />
			<PinList history={history} />
			<ImgUploader />
		</Template>
	);
};

const Spacer = styled.header`
	top: 80px;
	width: 100%;
	margin-top: 80px;
`;

export default Home;
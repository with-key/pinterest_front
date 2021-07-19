import React, {useEffect} from 'react';
import styled from 'styled-components';

// components
import Template from '../components/Template';
import Header from '../components/Header';
import PinList from '../components/PinList';

// redux
import { useDispatch } from 'react-redux';
import { __getPinList } from '../modules/pin';

const Home = ({ history }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(__getPinList());
	}, []);


	return (
		<Template>
<<<<<<< Updated upstream
			<Header history={ history }/>
			<PinList history={ history }/>
=======
			<Header history={history} />
			<Spacer />
			<PinList history={history} />
			<ImgUploader />
>>>>>>> Stashed changes
		</Template>
	)
};

<<<<<<< Updated upstream
export default Home;
=======
const Spacer = styled.header`
	top: 80px;
	width: 100%;
	margin-top: 80px;
`;

export default Home;
>>>>>>> Stashed changes

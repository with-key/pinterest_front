import React from 'react';
import styled from 'styled-components';
import ImgUploader from '../components/ImgUploader';

// components
import Template from '../components/Template';
import Header from '../components/Header';
import PinList from '../components/PinList';

const Home = ({ history }) => {
	// console.log(history);
	return (
		<Template>
			<Header history={history} />
			<PinList history={history} />
			<ImgUploader />
		</Template>
	);
};

export default Home;

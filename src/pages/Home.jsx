import React from 'react';
import styled from 'styled-components';

// components
import Template from '../components/Template';
import Header from '../components/Header';
import PinList from '../components/PinList';

const Home = ({ history }) => {
	// console.log(history);
	return (
		<Template>
			<Header />
			<PinList />
		</Template>
	)
};

export default Home;
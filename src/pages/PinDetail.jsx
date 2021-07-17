import React from 'react';

// components & elements
import Template from '../components/Template';
import Header from '../components/Header';
import PinList from '../components/PinList';
import PinItemDetail from '../components/PinItemDetail';

const PinDetail = ({ history }) => {
	// console.log(history);
	return (
			<Template>
				<Header />
				<PinItemDetail />
				<PinList />
			</Template>
	)
};

export default PinDetail;
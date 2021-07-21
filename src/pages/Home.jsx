import React, { useEffect } from 'react';
//----- elements & components -----//
import Template from '../components/Template';
import PinList from '../components/PinList';
//----- redux -----//
import { useSelector, useDispatch } from 'react-redux';
import { pinActions } from '../modules/pin';

const Home = ({ history }) => {
	const dispatch = useDispatch();
	const pin_list = useSelector((state) => state.pin.list);

	useEffect(() => {
		if (pin_list.length === 0) {
			dispatch(pinActions.__getPinList());
		}		
	}, []);

	return (
		<Template history={history}>
			<PinList history={history} />
		</Template>
	);
};

export default Home;

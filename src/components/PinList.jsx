import React from 'react';
import styled, { keyframes } from 'styled-components';

// components
import PinCard from './PinCard';

const PinList = ({ history, style }) => {
	return (
		<Container style={style}>
			<PinCard history={history} />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />

			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />

			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />

			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
			<PinCard />
		</Container>
	);
};

const Div = styled.div`
	width: 100px;
	height: 100px;
`;
// for default view (Stackgrid 적용 전)
const Container = styled.header`
	border: 1px solid green;
	position: absolute;
	top: 84px;
	width: 100%;
	padding: 0px 12px;
	display: grid;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	grid-template-rows: repeat(4, 1fr);
	grid-template-columns: repeat(8, 1fr);
	grid-auto-rows: 100px;
`;

export default PinList;

import React from 'react';
import styled from 'styled-components';

// components
import PinCard from './PinCard';

const PinList = (props) => {
	return (
			<Container>
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
	)
};

// for default view (Stackgrid 적용 전)
const Container = styled.header`
	width: 100%;
	padding: 0px 12px;
  display: grid;
	flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
	grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 100px;
`;


export default PinList;
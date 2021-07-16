import React from 'react';
import styled from 'styled-components';

// components
import PinList from './PinList';

const PinCard = (props) => {
	// console.log(history);
	return (
		<React.Fragment>
			<ImgCard>Pin</ImgCard>
		</React.Fragment>
	)
};

// for default view (Stackgrid 적용 전)
const ImgCard = styled.section`
	height: 375px;
	margin: 0px 8px 40px;
	border-radius: 20px;
  box-sizing: border-box;
	display: flex;
	flex-direction: column; 
	position: relative;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
`;

export default PinCard;
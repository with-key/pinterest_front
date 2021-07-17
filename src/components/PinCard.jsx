import React from 'react';
import styled, { keyframes } from 'styled-components';

// components

const PinCard = ({ history }) => {
	return (
		<React.Fragment>
			<ImgCard
				// onClick={() => {history.push('/pin/:id');}}
				history={history}
			>
				Pin
			</ImgCard>
		</React.Fragment>
	);
};

// for default view (Stackgrid 적용 전)

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ImgCard = styled.section`
	height: 300px;
	margin: 0px 8px 40px;
	border-radius: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	justify-content: center;
	background-color: #ddd;
	animation: ${boxFade} 2s 1s infinite linear alternate;
`;

export default PinCard;

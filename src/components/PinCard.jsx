import React from 'react';
import styled from 'styled-components';

// components

const PinCard = ({ history }) => {
	return (
		<React.Fragment>
			<ImgCard 
				onClick={() => {history.push('/pin/:id');}}
				history={history}
				>Pin</ImgCard>
		</React.Fragment>
	)
};

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
	cursor: default;
`;

export default PinCard;
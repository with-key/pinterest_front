import React from 'react';
import styled from 'styled-components';

const Template = ({ children }) => {
	return (
		<Wrapper>
			{children}
		</Wrapper>
	);
};

// style
const Wrapper = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #eee;
`;
export default Template;

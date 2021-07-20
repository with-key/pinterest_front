import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';

const Template = ({ children, history, ...rest }) => {
	return (
		<Container {...rest}>
			<Header history={history} />
			<Main {...rest}>{children}</Main>
		</Container>
	);
};

// style
const Container = styled.section`
	padding-top: 80px;
	height: 100vh;
	background-color: ${(props) => props.bg};
`;

const Main = styled.main`
	padding: ${(props) => props.pd};
	margin: ${(props) => props.mg};
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export default Template;

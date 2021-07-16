import React from 'react';
import styled from 'styled-components';

// component

const Template = ({ children }) => {
	return (
		<Wrapper>
			<Header />
			<Container>{children}</Container>
			<Footer />
		</Wrapper>
	);
};

// for test ; header/footer ; 컴포넌트 넣은 후 삭제
const Header = styled.section`
	height: 75px;
`;
const Footer = styled.section``;

// style
const Wrapper = styled.section``;

const Container = styled.section`
	width: 100%;
	min-height: calc(100vh - 75px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #eee;
`;

export default Template;

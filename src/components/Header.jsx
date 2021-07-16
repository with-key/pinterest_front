import React from 'react';
import styled from 'styled-components';
import { Flex } from '../elem';

const Header = () => {
	return (
		<Container>
			<Flex></Flex>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 80px;
	background-color: #fff;
	border: 1px solid #eee;
`;
export default Header;

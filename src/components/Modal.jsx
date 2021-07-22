import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Flex } from '../elem';

const Modal = ({ children, ...rest }) => {
	return (
		<>
			<Content>
				<Flex dr='column' jc='space-between'>
					<Main>{children}</Main>
				</Flex>
			</Content>
		</>
	);
};
const Name = styled.div`
	font-size: ${(props) => props.fs};
`;

const Main = styled.div`
	width: 500px;
	height: 300px;
	padding: 24px;
	margin-bottom: 2.4rem;
`;
const Content = styled.div`
	display: flex;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	align-items: center;
	justify-content: center;
	position: absolute;
	width: 600px;
	height: 400px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	z-index: 99999;
	background-color: #fbfbfb;
	border-radius: 24px;
`;

export default Modal;

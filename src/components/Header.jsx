import React from 'react';
import styled from 'styled-components';
import { Flex, Input, Button } from '../elem';

const Header = (props) => {
	return (
		<Container>
			<Flex width={'128px'}>
				<Button 
					children={'P'} 
					height={'52px'} 
					type={'circle'} 
					_onClick={() => {
						window.location.replace('/');
					}}/>
				<Button 
					children={'홈'} 
					height={'52px'} 
					tertiary
					_onClick={() => {
						window.location.replace('/');
					}}/>
			</Flex>
			<Flex width={'calc(100vw - 336px)'}>
				<Input width={'100%'} header placeholder={'검색'} mg={'0px 8px'}/>
			</Flex>
			<Flex width={'200px'}>
				<Button children={'Test'} height={'52px'} type={'circle'}/>
				<Button children={'Test'} height={'52px'} type={'circle'}/>
				<Button children={'Test'} height={'52px'} type={'circle'}/>
				<Button children={'Test'} height={'52px'} type={'circle'}/>
			</Flex>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 84px;
	padding: 16px; 
	background-color: #fff;
	border: none;
`;
export default Header;

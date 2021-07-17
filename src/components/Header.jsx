import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Flex, Input, Button } from '../elem';

const Header = (props) => {
	// 스크롤 구독, 헤더 고정 후 스크롤 시 그림자
	const [isScrolled, setIsScrolled] = useState(false);
	const scrollListener = () => {
    setIsScrolled(window.pageYOffset > 0);
  };
	useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

	return (
		<Container className={isScrolled ? 'scrolled' : ''}>
			<Flex width={'128px'}>
				<Button 
					children={'P'} 
					height={'48px'} 
					type={'circle'} 
					_onClick={() => {
						window.location.replace('/');
					}}/>
				<Button 
					children={'홈'} 
					height={'48px'} 
					tertiary
					_onClick={() => {
						window.location.replace('/');
					}}/>
			</Flex>
			<Flex width={'calc(100vw - 336px)'}>
				<Input width={'100%'} header placeholder={'검색'} mg={'0px 8px'}/>
			</Flex>
			<Flex width={'200px'}>
				<Button children={'Test'} height={'48px'} type={'circle'}/>
				<Button children={'Test'} height={'48px'} type={'circle'}/>
				<Button children={'Test'} height={'48px'} type={'circle'}/>
				<Button children={'Test'} height={'48px'} type={'circle'}/>
			</Flex>
		</Container>
	);
};

const Container = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 80px;
	position: fixed;
	top: 0;
	z-index:999;
	padding: 16px; 
	background-color: #fff;
	border: none;
	box-shadow: 0;
	transition: box-shadow 0.5s;
		&.scrolled {
  	box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
}
`;


export default Header;

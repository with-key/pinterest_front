import React, { useState } from 'react';
import SignupCard from '../components/SignupCard';
import styled from 'styled-components';
import { Button, Text, Icons, Flex } from '../elem';
import { Motion, spring } from 'react-motion';
import MainBackList from '../components/MainBackList';

const Signup = () => {
	const [viewLogin, setViewLogin] = useState(false);
	return (
		<>
			<Motion
				defaultStyle={{
					top: 0,
					bottom: 1490,
					opacity: -5,
					bg: 0,
				}}
				style={{
					top: spring(viewLogin ? -2000 : 0, { stiffness: 45, dumping: 100 }),
					bottom: spring(viewLogin ? 0 : 1490, {
						stiffness: 45,
						dumping: 100,
					}),
					opacity: spring(viewLogin ? 1 : -5, {
						stiffness: 25,
						dumping: 40,
					}),
					bg: spring(viewLogin ? 0.5 : 0, {
						stiffness: 50,
						dumping: 40,
					}),
				}}
			>
				{(value) => (
					<>
						<Container
							onWheel={(e) => {
								if (e.nativeEvent.wheelDelta < 0) setViewLogin(true);
								else if (e.nativeEvent.wheelDelta > 0) setViewLogin(false);
							}}
						>
							<Header
								style={{
									transform: `translateY(${value.top}px)`,
								}}
							>
								<Flex ai='center' gap='10px'>
									<Icons.Logo size='32' color='var(--primary-red)' />
									<Text size='2rem' color='var(--primary-red)' weight='700' l>
										Pinterest
									</Text>
								</Flex>
								<Flex gap='5rem'>
									<Flex ai='center' gap='2rem'>
										<Text size='1.6rem' pointer>
											소개
										</Text>
										<Text size='1.6rem' pointer>
											비즈니스
										</Text>
										<Text size='1.6rem' pointer>
											언론
										</Text>
									</Flex>
									<Flex ai='center' gap='10px'>
										<Button
											primary
											height='40px'
											_onClick={() => {
												setViewLogin(true);
											}}
										>
											로그인
										</Button>
										<Button
											color='var(--primary-black)'
											height='40px'
											_onClick={() => {
												setViewLogin(true);
											}}
										>
											가입하기
										</Button>
									</Flex>
								</Flex>
							</Header>
							<Wrapper>
								<MainBackList
									style={{
										transform: `translateY(${value.top}px)`,
									}}
								/>
								<FlexBox
									style={{
										transform: `translateY(${value.top}px)`,
									}}
								>
									<Text size='7rem' mg='7rem 0 1.8rem 3.6rem'>
										꾸미기 아이디어를 찾아보세요.
									</Text>
								</FlexBox>
							</Wrapper>
							<Wrapper>
								<FlexBox
									style={{
										transform: `translateY(${value.bottom}px)`,
										opacity: viewLogin && value.opacity,
									}}
								>
									<Text
										size='7rem'
										mg='7rem 0 1.8rem 3.6rem'
										color='#fff'
										weight='700'
									>
										가입하여 더 많은 아이디어를
										<br /> 만나보세요
									</Text>
									<SignupCard />
								</FlexBox>
								<Back
									style={{
										opacity: value.bg,
									}}
								/>
							</Wrapper>
						</Container>
					</>
				)}
			</Motion>
		</>
	);
};

const Container = styled.section`
	overflow: hidden;
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;

const Header = styled.header`
	width: 100%;
	height: 80px;
	position: absolute;
	top: 0;
	z-index: 1;
	background-color: var(--primary-white);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2.4rem;
`;

const Wrapper = styled.div`
	position: absolute;
	overflow: hidden;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const FlexBox = styled.div`
	position: absolute;
	overflow: hidden;
	width: 1318px;
	display: flex;
	justify-content: space-between;
	z-index: 9999;
`;

const Back = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 0;
	background-color: #000;
`;
export default Signup;

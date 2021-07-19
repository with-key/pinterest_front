import React, { useState } from 'react';
import SignupCard from '../components/SignupCard';
import styled from 'styled-components';
import { Button, Text, Flex } from '../elem';
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
							<BottomWrapper>
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
							</BottomWrapper>
						</Container>
					</>
				)}
			</Motion>
		</>
	);
};

const Wrapper = styled.div`
	position: absolute;
	overflow: hidden;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Back = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: #000;
`;

const BottomWrapper = styled.div`
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
	z-index: 99;
`;

const Container = styled.section`
	overflow: hidden;
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
	/* background-color: #000; */
`;

export default Signup;

import React, { useState } from 'react';
import SignupCard from '../components/SignupCard';
import styled from 'styled-components';
import { Flex, Text } from '../elem';
import { Motion, spring } from 'react-motion';

const Signup = () => {
	const [viewLogin, setViewLogin] = useState(false);
	if (!viewLogin) {
		return (
			<Motion
				defaultStyle={{ x: viewLogin ? -500 : 0, op: -200 }}
				style={{ x: spring(viewLogin ? 10 : -500), op: spring(1) }}
			>
				{(value) => (
					<Container
						onWheel={(e) => {
							if (e.nativeEvent.wheelDelta < 0) setViewLogin(true);
						}}
					>
						<Title style={{ transform: `translateY(${value.x}px)` }}>
							<Text size='7rem' mg='7rem 0 1.8rem 3.6rem'>
								집안 꾸미기 아이디어를 찾아보세요.
							</Text>
						</Title>
						<Flex
							width='1318px'
							jc='space-between'
							style={{ opacity: value.o }}
						>
							{/* <Title>
								<Text size='7rem' mg='7rem 0 1.8rem 3.6rem'>
									가입하여 더 많은 아이디어를
									<br /> 만나보세요
								</Text>
							</Title>
							<SignupCard /> */}
						</Flex>
					</Container>
				)}
			</Motion>
		);
	}

	return (
		<Container
			onWheel={(e) => {
				if (e.nativeEvent.wheelDelta > 0) setViewLogin(false);
			}}
		>
			<Motion
				defaultStyle={{ o: 0 }}
				style={{ o: spring(1, { stiffness: 120, damping: 17 }) }}
			>
				{(value) => (
					<Flex width='1318px' jc='space-between' style={{ opacity: value.o }}>
						<Title>
							<Text size='7rem' mg='7rem 0 1.8rem 3.6rem'>
								가입하여 더 많은 아이디어를
								<br /> 만나보세요
							</Text>
						</Title>
						<SignupCard />
					</Flex>
				)}
			</Motion>
		</Container>
	);
};
const Container = styled.section`
	display: flex;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;
const Title = styled.div`
	/* &:hover {
		transform: translateY(200px);
	} */
`;
export default Signup;

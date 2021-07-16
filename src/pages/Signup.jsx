import React from 'react';
import SignupCard from '../components/SignupCard';
import styled from 'styled-components';
import { Flex, Text } from '../elem';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Signup = () => {
	return (
		<Container>
			<Flex width='1318px' jc='space-between'>
				<Title>
					<Text size='7rem' mg='7rem 0 1.8rem 3.6rem'>
						가입하여 더 많은 아이디어를
						<br /> 만나보세요
					</Text>
				</Title>
				<SignupCard />
			</Flex>
		</Container>
	);
};
const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 200vh;
`;
const Title = styled.div``;
export default Signup;

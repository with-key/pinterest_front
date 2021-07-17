import React, { useState } from 'react';
import SignupCard from '../components/SignupCard';
import styled from 'styled-components';
import { Button, Text, Flex } from '../elem';
import { Motion, spring } from 'react-motion';
import PinList from '../components/PinList';
import { useSelector } from 'react-redux';

const Signup = () => {
	const [viewLogin, setViewLogin] = useState(true);

	return (
		<>
			<Motion
				defaultStyle={{
					textY: viewLogin ? 0 : 10,
					listY: 0,
					opacity: 0,
					bgOpacity: 0,
				}}
				style={{
					textY: spring(viewLogin ? -1000 : 0, { stiffness: 70, dumping: 40 }),
					listY: spring(viewLogin ? -1500 : 0, {
						stiffness: 70,
						dumping: 40,
					}),
					opacity: spring(1, { stiffness: 70, dumping: 40 }),
					bgOpacity: 1,
				}}
			>
				{(value) => (
					<>
						<Container
							onWheel={(e) => {
								if (e.nativeEvent.wheelDelta < 0) setViewLogin(true);
								else if (e.nativeEvent.wheelDelta > 0) setViewLogin(false);
							}}
							style={{ opacity: value.bgOpacity }}
							viewLogin
						>
							<Title
								style={{
									transform: `translateY(${value.textY}px)`,
								}}
							>
								<Text size='7rem'>집안 꾸미기 아이디어를 찾아보세요.</Text>
							</Title>
							{viewLogin && (
								<Motion
									defaultStyle={{
										textY: viewLogin ? 0 : 10,
										listY: viewLogin ? 1500 : 0,
										opacity: -5,
									}}
									style={{
										textY: spring(viewLogin ? -700 : 0, {
											stiffness: 70,
											dumping: 40,
										}),
										listY: spring(viewLogin ? 0 : 1500, {
											stiffness: 70,
											dumping: 40,
										}),
										opacity: spring(1, { stiffness: 25, dumping: 40 }),
									}}
								>
									{(value) => (
										<Wrapper>
											<FlexBox
												style={{
													opacity: value.opacity,
												}}
											>
												<Text size='7rem' mg='7rem 0 1.8rem 3.6rem'>
													가입하여 더 많은 아이디어를
													<br /> 만나보세요
												</Text>
												<SignupCard />
											</FlexBox>
										</Wrapper>
									)}
								</Motion>
							)}
						</Container>
					</>
				)}
			</Motion>
		</>
	);
};

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const FlexBox = styled.div`
	width: 1318px;
	/* height: 100%; */
	display: flex;
	justify-content: space-between;
	z-index: 99;
`;

const Header = styled.header`
	/* height: 84px; */
`;

const Container = styled.section`
	display: flex;
	height: calc (100vh - 84px);
	justify-content: center;
	align-items: center;
`;
const Title = styled.div`
	position: absolute;
	z-index: 999;
	border: 1px solid blue;
	top: 30%;
`;
export default Signup;

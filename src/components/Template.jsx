import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Drop from './Drop';

const Template = ({ children, history, ...rest }) => {
	return (
		<Container {...rest}>
			<Header history={history} />
			<Main {...rest}>{children}</Main>
			<FloatBtns>
				<Drop.Container
					size='56px'
					direction='left'
					type='add'
					shadow
					history={history}
				>
					<Drop.Item
						_onClick={() => {
							history.push('/pin-bulider');
						}}
					>
						핀 만들기
					</Drop.Item>
				</Drop.Container>
				<Drop.Container size='56px' shadow></Drop.Container>
			</FloatBtns>
		</Container>
	);
};

// style
const Container = styled.section`
	padding-top: 80px;
	height: 100vh;
	background-color: ${(props) => props.bg};
`;
const FloatBtns = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	position: fixed;
	right: 24px;
	bottom: 24px;
	z-index: 999;
`;
const Main = styled.main`
	padding: ${(props) => props.pd};
	margin: ${(props) => props.mg};
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export default Template;

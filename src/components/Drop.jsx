import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Text, Icons } from '../elem';

const Item = ({ children, _onClick, direction, history }) => {
	return (
		<Link onClick={_onClick} history={history}>
			<Text
				size='1.4rem'
				weight='700'
				color='var(--primary-black)'
				mg='12px 8px'
			>
				{children}
			</Text>
		</Link>
	);
};

const Container = ({ children, size, direction, type, shadow, history }) => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	return (
		<Wrapper
			shadow={shadow}
			size={size}
			onClick={() => {
				setIsMenuVisible(!isMenuVisible);
			}}
		>
			{type === 'menu' ? (
				<Icons.MeatballsMenu />
			) : type === 'add' ? (
				<Icons.Add />
			) : (
				''
			)}

			{isMenuVisible && (
				<ItemWrapper history={history} direction={direction}>
					{children}
				</ItemWrapper>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	${(props) => props.shadow && `box-shadow: 0px 0px 12px rgb(0 0 0 / 10%);`}
	background-color: #fff;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	border-radius: 50%;
	position: relative;
	z-index: 9999;
	transition: transform ease-in-out 100ms;
	&:hover {
		background-color: var(--primary-lightgray);
	}
	&:active {
		transform: scale(0.95);
	}
`;

const ItemWrapper = styled.div`
	box-shadow: 0px 0px 12px rgb(0 0 0 / 10%);
	background-color: #fff;
	position: absolute;
	padding: 8px;
	border-radius: 12px;
	${(props) =>
		props.direction === 'left' &&
		css`
			top: 0px;
			left: -150px;
		`};
	${(props) =>
		props.direction === 'right' &&
		css`
			top: 0px;
			left: 60px;
		`};
	${(props) =>
		props.direction === 'top' &&
		css`
			top: -56px;
			left: 50%;
			transform: translate(-50%, -50%);
		`};
	${(props) =>
		props.direction === 'bottom' &&
		css`
			bottom: -110px;
			left: 50%;
			transform: translateX(-50%);
		`};
`;

const Link = styled.div`
	width: 120px;
	z-index: 999;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover {
		background-color: var(--primary-lightgray);
		border-radius: 12px;
	}
`;

const Drop = {
	Container,
	Item,
};

export default Drop;

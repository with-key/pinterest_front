import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, type, ...rest }) => {
	if (type === 'circle') {
		return (
			<CircleBtn onClick={rest._onClick} {...rest}>
				{children}
			</CircleBtn>
		);
	};

	return (
		<DefaultBtn onClick={rest._onClick} {...rest}>
				{children}
		</DefaultBtn>
	);
};
// 60px float fixed button

Button.defaultProps = {
	width: '80px;',
	height: '48px;',
	margin: '0px',
	padding: '0px',
	backgroundColor: 'var(--primary-red);',
	color: 'var(--primary-white);',
};

const DefaultBtn = styled.button`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.mg};
	padding: ${(props) => props.pd};
	border: none;
	border-radius: ${(props) => props.height};
	font-weight: 900;
	font-size: 1.6rem;
	text-align: center;
	
	${(props) =>
		props.primary &&
		css`
			background-color: var(--primary-red);
			color: var(--primary-white);
			&:hover{
				background-color: #9F2223;
			}
			&:active{
				transform: scale(.95);
			}
		`}
	
	${(props) =>
	props.secondary &&
	css`
		background-color: var(--primary-lightgray);
		color: var(--primary-black);
		&:hover{
			background-color: #E2E2E2;
		}
	`}
		
	${(props) =>
	props.tertiary &&
	css`
		background-color: var(--primary-white);
		color: var(--primary-black);
		&:hover{
			background-color: var(--primary-lightgray);
		}
		&:active{
		background-color: var(--primary-black);
		color: var(--primary-white);
	}
	`}
	
	&:disabled{
		background-color: var(--primary-lightgray);
		color: var(--primary-gray);
		cursor: not-allowed;
	}
`;

const CircleBtn = styled.button`
	--size: ${(props) => props.height};
  width: var(--size);
  height: var(--size);
	border: none;
	border-radius: var(--size);
	font-weight: 900;
	font-size: 1.6rem;
	text-align: center;
	background-color: var(--primary-white);
	color: var(--primary-gray);
		&:hover{
			background-color: #E2E2E2;
		}
`;

export default Button;

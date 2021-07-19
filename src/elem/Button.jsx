import React from 'react';
import styled, { css } from 'styled-components';

const Button = ({ children, type, ...rest }) => {
	if (type === 'circle') {
		return (
			<CircleBtn onClick={rest._onClick} {...rest}>
				{children}
			</CircleBtn>
		);
	}

	if (type === 'float') {
		return (
			<FloatBtn onClick={rest._onClick} {...rest}>
				{children}
			</FloatBtn>
		);
	};

	return (
		<DefaultBtn onClick={rest._onClick} {...rest}>
			{children}
		</DefaultBtn>
	);
};

Button.defaultProps = {
	width: '80px;',
	height: '48px;',
	margin: '0px',
	padding: '0px',
	backgroundColor: 'var(--primary-red);',
	color: 'var(--primary-white);',
	_onClick: () => {},
};

const DefaultBtn = styled.button`
	cursor: pointer;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: ${(props) => props.mg};
	padding: ${(props) => props.pd};
	background-color: ${(props) =>
		props.bg ? props.bg : 'var (--primary-white)'};
	color: ${(props) => props.color};
	border: none;
	border-radius: ${(props) => props.height};
	font-weight: 900;
	font-size: 1.6rem;
	text-align: center;
	&:focus {
		outline: none;
		box-shadow: rgba(3, 102, 214, 0.4) 0px 0px 0px 4px;
	}

	${(props) =>
		props.primary &&
		css`
			background-color: var(--primary-red);
			color: var(--primary-white);
			&:hover {
				background-color: #9f2223;
			}
			&:active {
				transform: scale(0.95);
			}
		`}

	${(props) =>
<<<<<<< HEAD
		props.secondary &&
		css`
			background-color: var(--primary-lightgray);
			color: var(--primary-black);
			&:hover {
				background-color: #e2e2e2;
			}
		`}
=======
	props.secondary &&
	css`
		background-color: var(--primary-lightgray);
		color: var(--primary-black);
		&:hover{
			background-color: #E2E2E2;
		}
		&:active{
				transform: scale(.95);
		}
	`}
>>>>>>> 3082d17fc3a5e8e3807a5e7026ad25f541e38cf1
		
	${(props) =>
		props.tertiary &&
		css`
			background-color: var(--primary-white);
			color: var(--primary-black);
			&:hover {
				background-color: var(--primary-lightgray);
			}
			&:active {
				background-color: var(--primary-black);
				color: var(--primary-white);
			}
		`}
	
	&:disabled {
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
	text-align: center;
<<<<<<< HEAD
	background-color: ${(props) =>
		props.bg ? props.bg : 'var (--primary-white)'};
	color: var(--primary-gray);
	&:hover {
		background-color: #e2e2e2;
	}
=======
	vertical-align: middle;
	background-color: var(--primary-white);
	color: var(--primary-gray);
		&:hover{
			background-color: var(--primary-lightgray);
		}
>>>>>>> 3082d17fc3a5e8e3807a5e7026ad25f541e38cf1
`;
//	${(props) => (props.color ? `color: ${props.color};` : `color: var(--primary-gray);`)}

// 핀 작성 위한 고정버튼; 헤더 내 생성
// 위치 style로 직접 배치 
const FloatBtn = styled.button`
	width: 56px;
	height: 56px;
	border-radius: 56px;
	background-color: var(--primary-white);
	color: var(--primary-black);
	box-sizing: border-box;
	position: fixed;
	text-align: center;
	vertical-align: middle;
	border: none;
	cursor: pointer;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
		&:hover {
			background-color: var(--primary-lightgray);
		}
`

export default Button;
import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...rest }) => {
	return (
		<BtnPrimary onClick={rest._onClick} {...rest}>
			{children}
		</BtnPrimary>
	);
};

Button.defaultProps = {
	height: '40px;',
	backgroundColor: 'var(--primary-red);',
	color: 'var(--primary-black);',
};

const BtnPrimary = styled.button`
	padding: 14px 4px;
	border: none;
	border-radius: 56px;
	font-weight: 900;
	font-size: 1.8rem;
	background-color: var(--primary-red);
	color: var(--primary-white);
	/* background-color: ${(props) => props.bgColor}; */
	cursor: pointer;
`;

export default Button;

import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
	return (
		<InputPrimary onClick={props._onClick} type={props.type} {...props} />
	);
};

Input.defaultProps = {
	label: false,
	type: 'text',
	placeholder: '',
	multiLine: false,
	_onChange: () => {},
	_onKeyPress: () => {},
};

const InputPrimary = styled.input`
	width: 100%;
	height: 48px;
	/* height: ${(props) => (props.height)}; */
	padding: 8px;
	border: 2px solid var(--secondary-lightgray);
	border-radius: 18px;	
	box-sizing: border-box;
	background-color: transparent;
	display: block;
	&:focus {
		outline: none;
		border: 
			4px solid #97C2FA;
	}
`;

export default Input;
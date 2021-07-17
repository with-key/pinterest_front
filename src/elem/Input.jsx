import React from 'react';
import styled from 'styled-components';

const Input = ({ type, header, ...rest }) => {
	if (header) {
		return <HeaderInput onClick={rest._onClick} {...rest} />;
	}

	return (
		<DefaultInput
			onClick={rest._onClick}
			type={type}
			onChange={rest._onChange}
			{...rest}
		/>
	);
};

Input.defaultProps = {
	height: '48px',
	// label: false,
	type: 'text',
	placeholder: '',
	multiLine: false,
	_onChange: () => {},
	_onKeyPress: () => {},
};

const DefaultInput = styled.input`
	width: ${(props) => (props.width ? props.width : '100%')};
	height: ${(props) => props.height};
	margin: ${(props) => props.mg};
	padding: 8px;
	border: 2px solid var(--secondary-lightgray);
	border-radius: 18px;
	box-sizing: border-box;
	background-color: transparent;
	display: block;
	&:focus {
		outline: none;
		/* border: 4px solid #97c2fa; */
		box-shadow: rgba(3, 102, 214, 0.4) 0px 0px 0px 4px;
	}
`;

const HeaderInput = styled.input`
	width: ${(props) => props.width};
	margin: ${(props) => props.mg};
	height: 48px;
	padding: 8px;
	border: none;
	border-radius: 52px;
	box-sizing: border-box;
	background-color: var(--primary-lightgray);
	font-size: 1.6rem;
	display: block;
	&:hover {
		background-color: #e1e1e1;
	}
	&:focus {
		outline: none;
		border: 4px solid #97c2fa;
	}
`;

export default Input;

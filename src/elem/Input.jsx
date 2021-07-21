import React from 'react';
import styled, { css } from 'styled-components';

const Input = ({ type, header, ...rest }) => {
	if (header) {
		return <HeaderInput onClick={rest._onClick} {...rest} />;
	}

	return (
		<DefaultInput
			name={rest.name}
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

	padding: 8px 16px;
	border: 2px solid var(--secondary-lightgray);
	border-radius: 18px;
	${(props) =>
		props.comment &&
		css`
			border: 1px solid var(--secondary-lightgray);
			border-radius: ${(props) => props.height};
		`}

	box-sizing: border-box;
	background-color: transparent;
	display: block;
	&:focus {
		outline: none;
		box-shadow: rgba(3, 102, 214, 0.4) 0px 0px 0px 4px;
	}
	${(props) =>
		props.comment &&
		css`
			border: 1px solid var(--secondary-lightgray);
			border-radius: ${(props) => props.height};
		`}
`;

const HeaderInput = styled.input`
	width: ${(props) => props.width};
	margin: ${(props) => props.mg};
	height: 48px;
	padding: 8px 16px;
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
		box-shadow: rgba(3, 102, 214, 0.4) 0px 0px 0px 4px;
	}
	&::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		background-image: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png');
		background-size: contain;
		background-position: 0px -2px;
		background-repeat: no-repeat;
		padding-left: 24px;
		color: var(--secondary-gray);
		text-align: left;
		text-indent: 0;
	}
	&::-moz-placeholder {
		/* Firefox 19+ */
		background-image: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png');
		background-size: contain;
		background-position: 0px -2px;
		background-repeat: no-repeat;
		padding-left: 24px;
		color: var(--secondary-gray);
		text-align: left;
		text-indent: 0;
	}
	&:-ms-input-placeholder {
		/* IE 10+ */
		background-image: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png');
		background-size: contain;
		background-position: 0px -2px;
		background-repeat: no-repeat;
		padding-left: 24px;
		color: var(--secondary-gray);
		text-align: left;
		text-indent: 0;
	}
	&:-moz-placeholder {
		/* Firefox 18- */
		background-image: url('https://cdn1.iconfinder.com/data/icons/hawcons/32/698627-icon-111-search-256.png');
		background-size: contain;
		background-position: 0px -2px;
		background-repeat: no-repeat;
		padding-left: 24px;
		color: var(--secondary-gray);
		text-align: left;
		text-indent: 0;
	}
`;

export default Input;

import React from 'react';
import styled, { css } from 'styled-components';

const Text = ({ children, ...rest }) => {
	return (
		<TextBx {...rest} onClick={rest._onClick}>
			{children}
		</TextBx>
	);
};

const TextBx = styled.div`
	text-align: ${(props) => props.ta};
	cursor: ${(props) => props.pointer && 'pointer'};
	width: ${(props) => props.width};
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
	font-weight: ${(props) => props.weight};
	margin: ${(props) => props.mg};
	padding: ${(props) => props.pd};
`;

export default Text;

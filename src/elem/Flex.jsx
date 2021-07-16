import React from 'react';
import styled, { css } from 'styled-components';

const Flex = ({ children, ...rest }) => {
	return <FlexBx {...rest}>{children}</FlexBx>;
};

const FlexBx = styled.div`
	display: flex;
	width: ${(props) => props.width};
	margin: ${(props) => props.mg};
	padding: ${(props) => props.pd};
	gap: ${(props) => props.gap};
	justify-content: ${(props) => props.jc};
	align-items: ${(props) => props.ai};

	${(props) =>
		props.center &&
		css`
			align-items: center;
			justify-content: center;
		`};
`;

export default Flex;

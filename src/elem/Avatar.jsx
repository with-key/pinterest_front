import React from 'react';
import styled, { css } from 'styled-components';

const Avatar = ({ children, ...rest }) => {
	return <Wrapper {...rest}>{children}</Wrapper>;
};

Avatar.defaultProps = {
	display: 'flex',
	fontSize: '2.0rem',
	fontWeight: '700',
	justifyContent: 'center',
	alignItems: 'center',
	width: '48px',
	height: '48px',
	borderRadius: '50%',
	backgroundColor: 'var(--primary-lightgray)'
}

const Wrapper = styled.div`
	display: flex;
	font-size: ${(props)=>props.fontSize};
	font-weight: ${(props)=>props.fontWeight};
	color: var(--primary-black);
  justify-content: center;
	align-items: center;
	width: ${(props)=>props.width};
	height: ${(props)=>props.width};
	border-radius: 50%;
	background-color: var(--primary-lightgray);
`;
export default Avatar;

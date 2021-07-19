import React from 'react';
import styled, { css } from 'styled-components';

const Image = ({ shape, ...rest }) => {

  if (shape === 'circle') {
    return (
			  <CircleImg {...rest} />
    )
  }

  if (shape === 'relative'){
    return (
      <ImgContainer>
			  <ImgContents {...rest} />
	  	</ImgContainer>
    )
  }
	return (
			<DefaultImg {...rest} />
	)
};

Image.defaultProps = {
  shape: 'circle',
  src: 'https://wallpaperaccess.com/full/3501969.png',
  margin: '0px',
  padding: '0px',
  size: '32',
};

const DefaultImg = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
`;

const ImgContainer = styled.picture`
  width: 100%;
	min-width: 240px;
`;

const ImgContents = styled.img`
  width: ${(props) => props.width};
  height: auto;
  vertical-align: middle;
  border: 0;
  border-radius: 20px;
  object-fit: cover;
  src: url('${(props) => props.src}');

`
// const ImgContents = styled.div`
// 	position: relative;
// 	width: 100%;
//   padding-top: 100%;
// 	overflow: hidden;
//   ${(props) => 
//     props.pinDetail &&
// 		css`
// 			border-radius: 32px;
//       margin: 20px;
// 		`}
// 	background-image: url('${(props) => props.src}');
// 	background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
// `;

// for user profile image
const CircleImg = styled.div`
	display: inline-block;
	--size: ${(props) => props.size}px;
	width: var(--size);
	height: var(--size);
	border-radius: var(--size);
  ${(props) => (props.mg ? `margin: ${props.mg};` : '')}
  overflow: hidden;
	background-image: url('${(props) => props.src}');
	background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;


export default Image;
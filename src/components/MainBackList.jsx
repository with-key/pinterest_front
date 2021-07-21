import React from 'react';
import styled from 'styled-components';
import StackGrid, { transitions, easings } from 'react-stack-grid';

// components
const transition = transitions.scaleUp;
const MainBackList = ({ style }) => {
	const array = [
		{ src: 'https://source.unsplash.com/category/nature/300x390', size: 200 },
		{ src: 'https://source.unsplash.com/category/nature/301x390', size: 400 },
		{ src: 'https://source.unsplash.com/category/nature/302x390', size: 300 },
		{ src: 'https://source.unsplash.com/category/nature/303x390', size: 240 },
		{ src: 'https://source.unsplash.com/category/nature/304x390', size: 300 },
		{ src: 'https://source.unsplash.com/category/nature/305x390', size: 310 },
		{ src: 'https://source.unsplash.com/category/nature/306x390', size: 200 },
		{ src: 'https://source.unsplash.com/category/nature/307x390', size: 400 },
		{ src: 'https://source.unsplash.com/category/nature/308x390', size: 200 },
		{ src: 'https://source.unsplash.com/category/nature/309x390', size: 200 },
		{ src: 'https://source.unsplash.com/category/nature/310x390', size: 400 },
		{ src: 'https://source.unsplash.com/category/nature/311x390', size: 200 },
		{ src: 'https://source.unsplash.com/category/nature/312x390', size: 230 },
		{ src: 'https://source.unsplash.com/category/nature/313x390', size: 400 },
		{ src: 'https://source.unsplash.com/category/nature/314x390', size: 250 },
		{ src: 'https://source.unsplash.com/category/nature/315x390', size: 300 },
		{ src: 'https://source.unsplash.com/category/nature/316x390', size: 200 },
		{ src: 'https://source.unsplash.com/category/nature/317x390', size: 370 },
		{ src: 'https://source.unsplash.com/category/nature/318x390', size: 380 },
		{ src: 'https://source.unsplash.com/category/nature/319x390', size: 400 },
		{ src: 'https://source.unsplash.com/category/nature/320x390', size: 320 },
		{ src: 'https://source.unsplash.com/category/nature/321x390', size: 400 },
		{ src: 'https://source.unsplash.com/category/nature/322x390', size: 500 },
		{ src: 'https://source.unsplash.com/category/nature/323x390', size: 200 },
		{ src: 'https://source.unsplash.com/category/nature/324x390', size: 320 },
		{ src: 'https://source.unsplash.com/category/nature/325x390', size: 400 },
		{ src: 'https://source.unsplash.com/category/nature/326x390', size: 200 },
		{ src: 'https://source.unsplash.com/category/nature/327x390', size: 600 },
		{ src: 'https://source.unsplash.com/category/nature/328x390', size: 500 },
		{ src: 'https://source.unsplash.com/category/nature/329x390', size: 500 },
		{ src: 'https://source.unsplash.com/category/nature/330x390', size: 400 },
		{ src: 'https://source.unsplash.com/category/nature/331x390', size: 300 },
		{ src: 'https://source.unsplash.com/category/nature/332x390', size: 600 },
		{ src: 'https://source.unsplash.com/category/nature/333x390', size: 500 },
		{ src: 'https://source.unsplash.com/category/nature/334x390', size: 500 },
		{ src: 'https://source.unsplash.com/category/nature/335x390', size: 400 },
		{ src: 'https://source.unsplash.com/category/nature/336x390', size: 300 },
	];

	return (
		<Container style={style}>
			<StackGrid
				monitorImagesLoaded
				columnWidth={300}
				appear={transition.appear}
				appeared={transition.appeared}
				enter={transition.enter}
				entered={transition.entered}
				leaved={transition.leaved}
				easing={easings.cubicOut}
				duration={80}
				appearDelay={1}
			>
				{array.map((item, idx) => (
					<ImgCard key={idx} src={item.src} size={item.size} />
				))}
			</StackGrid>
		</Container>
	);
};

const Container = styled.section`
	position: absolute;
	overflow: hidden;
	top: 600px;
	width: 80%;
`;

const ImgCard = styled.section`
	background-image: url(${(props) => props.src});
	height: ${(props) => props.size}px;
	margin: 0px 8px 40px;
	border-radius: 20px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	position: relative;
	align-items: center;
	justify-content: center;
	background-color: #ddd;
	cursor: default;
`;

export default MainBackList;

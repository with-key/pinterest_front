import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { boardApi } from '../../shared/api';
import { Text } from '../../elem';
import { useDispatch, useSelector } from 'react-redux';
import { boardActions } from '../../modules/board';

const Board = () => {
	const dispatch = useDispatch();
	const boardList = useSelector((store) => store.board.boardList);

	useEffect(() => {
		dispatch(boardActions.__loadBoard());
	}, []);

	return (
		<Container>
			{boardList.map((item) => (
				<InnerBox>
					<ImgWrap>
						{item.pinImage.map((img) => {
							return <InnerImage img={img} />;
						})}
					</ImgWrap>
					<Text size='2rem' mg='12px 0'>
						{item.boardTitle}
					</Text>
				</InnerBox>
			))}
		</Container>
	);
};

const ImgWrap = styled.div`
	width: 100%;
	background-color: #eee;
	border-radius: 8px;
	height: 155px;
	border: 1px solid #eee;
`;

const InnerImage = styled.div`
	background: url(${(props) => props.img});
	border-radius: 8px;
	width: 100%;
	height: 155px;
`;

const Container = styled.section`
	padding: 24px 96px;
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	width: 100%;
	margin: 20px 0;
`;

const InnerBox = styled.div`
	width: 236px;
	cursor: pointer;
	transition: 200ms ease-in-out;
	&:hover {
		transform: scale(1.05);
	}
`;
export default Board;

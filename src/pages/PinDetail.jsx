import React, { useEffect } from 'react';
import styled from 'styled-components';

// elements & components
import { Flex, Text, Button, Image, Icons } from '../elem';
import Template from '../components/Template';
import PinList from '../components/PinList';
import CommentList from '../components/CommentList';
import MenuToggle from '../components/MenuToggle';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { pinActions } from '../modules/pin';

const PinDetail = ({ history, match, ...rest }) => {
	const dispatch = useDispatch();

	// id로 핀 가져오기
	const id = match.params.id;

	useEffect(() => {
		dispatch(pinActions.__getPin(id));
		dispatch(pinActions.__getPinList());
	}, [id]);

	const { pinTitle, pinContent, pinImage, pinUrl, userName } = useSelector(
		(state) => state.pin.selectedPin,
	);

	return (
		<Template>
			{/* 돌아가기 */}
			<Flex
				width='320px'
				style={{ position: 'absolute', top: '96px', left: '20px' }}
			>
				<Button height='48px' type='circle' onClick={() => history.push('/')}>
					<Icons.ArrowBack />
				</Button>
			</Flex>

			{/* 핀 상세 */}
			<Flex mg='80px 0px 0px' pd='12px'>
				<Container>
					{/* 핀 이미지 블록 */}
					<Flex width='50%' pd='20px' style={{ flex: 'none' }}>
						<Image shape='relative' pinDetail width='100%' src={pinImage} />
					</Flex>

					{/* 핀 내용 블록 */}
					<Flex
						width='50%'
						jc='space-between'
						style={{
							padding: '20px',
							flexDirection: 'column',
						}}
					>
						{/* 상단 블록 */}
						<Flex style={{ flexDirection: 'column' }}>
							{/* 상단 버튼 블록 */}
							<Flex
								style={{
									flexDirection: 'row',
									justifyContent: 'space-between',
								}}
							>
								<Flex>
									<MenuToggle list={['수정', '삭제']} editbtn />

									<Button height='48px' type='circle'>
										<Icons.Export />
									</Button>
								</Flex>
								<Flex>
									<Button children='저장' width='64px' height='48px' primary />
								</Flex>
							</Flex>

							{/* 내용 블록 */}
							<Flex style={{ flexDirection: 'column' }}>
								<Text size='3.6rem' weight='700' mg='16px 0px'>
									{pinTitle}
								</Text>
								<Text size='1.6rem' weight='400' mg='8px 0px'>
									{pinContent}
								</Text>
							</Flex>

							{/* 핀 작성자 블록 */}
							<Flex mg='16px 0px' ai='center'>
								<Image size='48' />
								<Text size='1.6rem' weight='700' mg='0px 12px'>
									{userName}
								</Text>
							</Flex>

							{/* 핀 댓글 목록 및 블록 */}
							<Flex mg='16px 0px'>
								<CommentList history={history} match={match} {...rest} />
							</Flex>
						</Flex>

						{/* 핀 즐겨찾기 블록 */}
						<Flex ai='center'>
							<Image size='32' />
							<Text size='1.6rem' weight='700' mg='0px 4px 0px 8px'>
								Username
							</Text>
							<Text size='1.6rem' weight='400'>
								님이
							</Text>
							<Text size='1.6rem' weight='700' mg='0px 2px 0px 8px'>
								보드
							</Text>
							<Text size='1.6rem' weight='400'>
								에 저장
							</Text>
						</Flex>
					</Flex>
				</Container>
			</Flex>

			{/* 하단 핀 목록 */}
			<Flex center>
				<Text size='2.2rem' weight='700' mg='0 0 16px'>
					다른 핀 더 보기
				</Text>
			</Flex>
			<PinList history={history} />
		</Template>
	);
};

const Container = styled.div`
	width: 1020px;
	height: auto;
	margin: 0px 0px 40px;
	background-color: var(--primary-white);
	box-sizing: border-box;
	border: none;
	border-radius: 32px;
	display: flex;
	flex-direction: row;
	position: relative;
	justify-content: center;
	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
`;

export default PinDetail;

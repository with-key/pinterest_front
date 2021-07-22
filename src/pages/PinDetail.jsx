import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// elements & components
import { Flex, Text, Button, Image, Icons, Avatar } from '../elem';
import Template from '../components/Template';
import PinList from '../components/PinList';
import CommentList from '../components/CommentList';
import ToggleButton from '../components/ToggleButton';
import Dropdown from '../components/Dropdown';
import Drop from '../components/Drop';
import Modal from '../components/Modal';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { pinActions } from '../modules/pin';
import { boardActions } from '../modules/board';
import { commentActions } from '../modules/comment';

const PinDetail = ({ history, match, ...rest }) => {
	const dispatch = useDispatch();
	const [visibleModal, setVisibleModal] = useState(false);
	const id = match.params.id;
	const { pinTitle, pinContent, pinImage, pinUrl } = useSelector(
		(state) => state.pin.selectedPin,
	);
	const userName = useSelector((state) => state.pin.selectedPin.user.userName);
	const boardList = useSelector((store) => store.board.boardList);

	useEffect(() => {
		dispatch(pinActions.__getPin(id));
		dispatch(pinActions.__getPinList());
		dispatch(commentActions.__getCommentList(id));
		dispatch(boardActions.__loadBoard());
	}, [id]);

	// 보드에 저장하는 클릭 이벤트 핸들러
	const pinAddToBoard = (boardId) => {
		dispatch(pinActions.__pinAddToBoard(id, boardId));
		setVisibleModal(false);
		window.alert('저장완료! ✨');
	};

	return (
		<Template history={history}>
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
			<Flex pd='12px'>
				<Container>
					{/* 핀 이미지 블록 */}
					<Flex width='50%' pd='20px' style={{ flex: 'none' }}>
						<Image shape='relative' pinDetail width='100%' src={pinImage} />
					</Flex>

					{/* 핀 내용 블록 */}
					<Flex width='50%' jc='space-between' dr='column' pd='20px'>
						{/* 상단 블록 */}
						<Flex dr='column'>
							{/* 상단 버튼 블록 */}
							<Flex jc='space-between'>
								<Flex>
									<ToggleButton edit>
										<Dropdown width='160px' pd='4px'>
											<Link>
												<MenuText>수정</MenuText>
											</Link>
											<Link>
												<MenuText>삭제</MenuText>
											</Link>
										</Dropdown>
									</ToggleButton>

									<Button height='48px' type='circle'>
										<Icons.Export />
									</Button>
								</Flex>
								<Flex>
									<Drop.Container
										type='add'
										direction='left'
										size='48px'
										shadow
									>
										<Drop.Item
											_onClick={() => {
												setVisibleModal(!visibleModal);
											}}
										>
											보드 목록 보기
										</Drop.Item>
									</Drop.Container>
									{visibleModal && (
										<Modal setVisibleModal={setVisibleModal}>
											<Flex jc='center' dr='column'>
												<Text size='3.2rem' weight='700' mg='0 0 50px 0'>
													나의 보드에 저장
												</Text>
												{boardList.map((item) => (
													<BoardWrap
														onClick={() => pinAddToBoard(item.boardId)}
													>
														{item.boardTitle}
													</BoardWrap>
												))}
											</Flex>
										</Modal>
									)}
								</Flex>
							</Flex>

							{/* 외부 링크 */}
							<UrlBox>
								<DefaultText mg='16px 0px 8px'>
									<a href={pinUrl} style={{ textDecoration: 'underline' }}>
										{pinUrl}
									</a>
								</DefaultText>
							</UrlBox>

							{/* 내용 블록 */}
							<Flex dr='column'>
								<Text size='3.6rem' weight='700' mg='16px 0px'>
									{pinTitle}
								</Text>
								<DefaultText mg='8px 0px'>{pinContent}</DefaultText>
							</Flex>

							{/* 핀 작성자 블록 */}
							<Flex mg='16px 0px' ai='center'>
								<Avatar width='48px' fontSize='1.8rem' fontWeight='700'>
									{userName.slice(0, 1).toUpperCase()}
								</Avatar>
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
								리신
							</Text>
							<DefaultText>님이</DefaultText>
							<Text size='1.6rem' weight='700' mg='0px 2px 0px 8px'>
								보드
							</Text>
							<DefaultText>에 저장</DefaultText>
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

const BoardWrap = styled.div`
	border: 1px solid #eee;
	border-radius: 8px;
	font-size: 1.7rem;
	display: flex;
	cursor: pointer;
	justify-content: center;
	margin: 5px 0;
	padding: 5px 5px 5px 16px;
	transition: transform 200ms ease-in-out;
	&:hover {
		background-color: #eee;
		transform: scale(1.1);
	}
`;

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

const DefaultText = styled(Text)`
	font-size: 1.6rem;
	font-weight: 400;
`;
const MenuText = styled(Text)`
	font-size: 1.4rem;
	font-weight: 700;
	color: var(--primary-black);
	margin: 12px 8px;
`;
const Link = styled.div`
	cursor: pointer;
	&:hover {
		background-color: var(--primary-lightgray);
		border-radius: 12px;
	}
`;
const UrlBox = styled(Flex)`
	width: 80%;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;
export default PinDetail;

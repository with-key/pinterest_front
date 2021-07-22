import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// elements & components
import { Flex, Text, Button, Icons, Avatar, Input } from '../elem';
import Template from '../components/Template';
import PinList from '../components/PinList';
import Board from '../components/myboard/Borad';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { pinActions } from '../modules/pin';
import Drop from '../components/Drop';
import Modal from '../components/Modal';
import { boardActions } from '../modules/board';

const PinBoard = ({ history, match, ...rest }) => {
	const dispatch = useDispatch();
	const [visibleModal, setVisibleModal] = useState(false);
	const email = localStorage.getItem('userId');
	const name = email.split('@')[0];

	const [boardName, setBoardName] = useState('');

	useEffect(() => {
		dispatch(pinActions.__getPinList());
	}, []);

	return (
		<Template history={history}>
			<Container>
				<Avatar width='120px' fontSize='5.6rem' fontWeight='500'>
					{localStorage.getItem('userId').slice(0, 1).toUpperCase()}
				</Avatar>
				<Text size='3.6rem' weight='700' mg='16px'>
					{name}
				</Text>
				<Text size='1.8rem' weight='400'>
					{email}
				</Text>
				<Flex width='100%' jc='space-between' mg='52px 0 16px'>
					<Flex>
						<Button type='circle' disabled>
							<Icons.Pencil />
						</Button>
						<Button type='circle' disabled>
							<Icons.Export />
						</Button>
					</Flex>
					<Flex>
						<Button type='circle' disabled>
							<Icons.Adjust />
						</Button>
						<Drop.Container type='add' direction='left' size='48px'>
							<Drop.Item
								_onClick={() => {
									history.push('/pin-builder');
								}}
							>
								핀 만들기
							</Drop.Item>
							<Drop.Item
								_onClick={() => {
									setVisibleModal(!visibleModal);
								}}
							>
								보드 만들기
							</Drop.Item>
						</Drop.Container>
						{visibleModal && (
							<Modal setVisibleModal={setVisibleModal}>
								<Flex jc='center' dr='column'>
									<Text size='3.2rem' weight='700' mg='0 0 50px 0'>
										보드 만들기
									</Text>
									<Text color='#333' size='1.4rem' mg='0 0 20px 0'>
										이름
									</Text>
									<Input
										value={boardName}
										_onChange={(e) => {
											setBoardName(e.target.value);
										}}
									/>
									<Flex width='100%' jc='flex-end' gap='12px' mg='90px 0 0 0'>
										<Button
											color='#333'
											onClick={() => {
												setVisibleModal(false);
											}}
										>
											취소
										</Button>
										<Button
											primary
											onClick={() => {
												dispatch(boardActions.__addBoard(boardName));
												setVisibleModal(false);
												setBoardName('');
											}}
										>
											만들기
										</Button>
									</Flex>
								</Flex>
							</Modal>
						)}
					</Flex>
				</Flex>
				<Board />
			</Container>
		</Template>
	);
};

const Container = styled(Flex)`
	width: 100%;
	height: auto;
	padding: 12px 16px;
	box-sizing: border-box;
	border: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export default PinBoard;

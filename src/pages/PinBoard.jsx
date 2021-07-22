import React, { useEffect } from 'react';
import styled from 'styled-components';
// elements & components
import { Flex, Text, Button, Image, Icons } from '../elem';
import Template from '../components/Template';
import PinList from '../components/PinList';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { pinActions } from '../modules/pin';

const PinBoard = ({ history, match, ...rest }) => {
	const dispatch = useDispatch();
	const email = localStorage.getItem('userId')
	const name = email.split('@')[0]

	useEffect(() => {
		dispatch(pinActions.__getPinList());
	}, []);

	return (
		<Template history={history}>
			<Container>
				<Image size='120'/>
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
						<Button type='circle' disabled>
							<Icons.Add />
						</Button>
					</Flex>
				</Flex>

			<PinList history={history}/>
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

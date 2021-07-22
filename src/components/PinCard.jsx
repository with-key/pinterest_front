import React from 'react';
import styled from 'styled-components';
// elements & components
import { Flex, Image, Button, Text, Avatar } from '../elem';

const PinCard = ({ history, pinId, pinImage, user, ...rest }) => {
	return (
		<React.Fragment>
			<ImgContainer>
				<Image
					className='image'
					shape='relative'
					width='236px'
					src={pinImage}
				/>
				<Middle className='middle'>
					<Flex>
						<Button children='저장' width='64px' height='48px' primary />
					</Flex>

					{/* <Flex width='100%' jc='space-between'>
						<Button height='32px' width='120px'>
							<Text weight='400'>
								<Icons.ArrowDiagonal />			
							</Text>
						</Button>								
							<Button height='32px' type='circle'>
								<Icons.Export />
							</Button>
							<Button height='32px' type='circle'>
								<Icons.MeatballsMenu />
							</Button>			
					</Flex> */}
				</Middle>
			</ImgContainer>

			{/* 핀 작성자 블록 */}
			<Flex mg='8px 0' ai='center'>
				<Avatar width='36px' fontSize='1.8rem' fontWeight='700'>
					{user.userName.slice(0, 1).toUpperCase()}
				</Avatar>
				<Text size='1.4rem' weight='400' mg='0px 8px'>
					{user.userName}
				</Text>
			</Flex>
		</React.Fragment>
	);
};

const ImgContainer = styled(Flex)`
	width: auto;
	height: auto;
	margin: 0px;
	border-radius: 20px;
	box-sizing: border-box;
	position: relative;
	display: flex;
	background-color: var(--primary-black);
	overflow: hidden;
	&:hover .image {
		opacity: 0.75;
		cursor: zoom-in;
	}
	&:hover .middle {
		opacity: 1;
	}
`;
const Middle = styled(Flex)`
	width: 100%;
	height: 100%;
	padding: 8px;
	position: absolute;
	transition: 0.5s ease;
	opacity: 0;
	display: flex;
	top: 0%;
	left: 0%;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-between;
`;
export default PinCard;

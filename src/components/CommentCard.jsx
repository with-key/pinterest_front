import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TimeCounting from 'time-counting';
//----- elements & components -----//
import { Flex, Button, Image, Text, Icons } from '../elem';
import MenuToggle 	from './MenuToggle';
import ToggleButton from './ToggleButton';
import Dropdown from './Dropdown';

//----- redux -----//
import { useDispatch, useSelector } from 'react-redux';
import { commentActions } from '../modules/comment';

const CommentCard = (props) => {
	const dispatch = useDispatch();
	const { commentContent, createdAt, likeNum, pinId, id} = props;
	const userName = props.user?.userName;

	const deleteComment = () => {
		const result = window.confirm('댓글을 삭제하시겠습니까?');
		if (result) {
			dispatch(commentActions.__deleteComment(id));
		}	
	}

	return (
		<Flex>
			<Flex width='10%'>
				<Image shape='circle' size='48' />
			</Flex>
			<Flex width='90%' style={{ flexDirection: 'column' }}>
				{/* 댓글 카드 블록 */}
				<CommentContainer>
					<Aligned>
						<Text size='1.4rem' mg='0 8px 0 0' weight='700'>
							{userName}
						</Text>
						<StyledText>
							{TimeCounting(createdAt, { lang: 'ko' })}
						</StyledText>
					</Aligned>
					<Flex>
						<Text size='1.2rem' mg='8px 0 0'>
							{commentContent}
						</Text>
					</Flex>
				</CommentContainer>

				<Aligned mg='4px 0 16px 16px' jc='space-between'>
					<Aligned>

						<Button comment type='circle'>
							<Icons.Like color='var(--primary-gray)' />
						</Button>
						<StyledText>
							{likeNum}
						</StyledText>

						<Button comment type='circle'>
							<Icons.MessageSmall color='var(--primary-gray)' />
						</Button>

						{/* 수정/ 삭제 테스트용 버튼 */}
						<ToggleButton edit comment>
							<Dropdown width='160px' pd='4px'>
								<Link>
									<MenuText>수정</MenuText>
								</Link>
								<Link onClick={deleteComment}>
									<MenuText>삭제</MenuText>
								</Link>
							</Dropdown>
						</ToggleButton>

					</Aligned>

					<Aligned>
						<Button comment type='circle'>
							<Icons.ThumbsUp color='var(--primary-gray)' />
						</Button>
						<StyledText>유용함</StyledText>
					</Aligned>
				</Aligned>
			</Flex>
		</Flex>
	);
};

CommentCard.defaultProps = {
	commentContent: '',
	id: 0,
	likeNum: 0,
	liken: true,
	pinId: 0,
	user: {
		createdAt: '2021-07-19T06:44:10.590Z',
		modifiedAt: '2021-07-19T06:44:10.590Z',
		password: '',
		userId: 0,
		userImage: '',
		userName: '',
		user_profile: '',
	},
};

const CommentContainer = styled(Flex)`
	margin: 0 0 0 16px;
	padding: 12px;
	flex-direction: column;
	border: 1px solid var(--secondary-lightgray);
	border-radius: 16px;
`;
const Aligned = styled(Flex)`
	align-items: center;
`;
const StyledText = styled(Text)`
	font-size: 1.2rem;
	color: var(--primary-gray);
`;
const MenuText = styled(Text)`
	font-size: 1.4rem;
	font-weight: 700;
	color: var(--primary-black);
	margin: 12px 8px;
`
const Link = styled.div`
	cursor: pointer;
	&:hover {
		background-color: var(--primary-lightgray);
		border-radius: 12px;
	}
`;
export default CommentCard;
import React, { useState } from 'react';
import styled from 'styled-components';
//----- elements & components -----//
import { Flex, Button, Avatar, Image, Text, Icons } from '../elem';
import CommentEdit from './CommentEdit';
//----- redux -----//
import { useDispatch } from 'react-redux';
import { commentActions } from '../modules/comment';

const CommentCard = (props) => {
	const dispatch = useDispatch();
	const { commentContents, likeNum, pinId, commentId} = props;
	const userName = props.user.userName;
	const modifiedAt = props.modifiedAt;
	
	
	const [isEditMode, setIsEditMode] = useState(false);
	
	// 삭제
	const deleteComment = () => {
		const result = window.confirm('댓글을 삭제하시겠습니까?');
		if (result) {
			dispatch(commentActions.__deleteComment(commentId));
		}	
	}

	return (
		<Flex>
			<Flex width='10%'>
				<Avatar width='48px' fontSize='1.8rem' fontWeight='700'>
					{userName.slice(0, 1).toUpperCase()}
				</Avatar>
			</Flex>
			<Flex width='90%' style={{ flexDirection: 'column' }}>
				{/* 댓글 카드 블록 */}
				<CommentContainer>
					<Aligned>
						<Text size='1.4rem' mg='0 8px 0 0' weight='700'>
							{userName}
						</Text>
						<StyledText>
							{modifiedAt}
						</StyledText>
					</Aligned>
					<Flex>
						<Text size='1.2rem' mg='8px 0 0'>
							{commentContents}
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

						{props.isMyComment && (
							<>
								<Button type='circle' comment
									_onClick={() => {
										setIsEditMode(!isEditMode);
									}}>
									<Icons.Pencil color='var(--primary-gray)'/> 
								</Button>
								<Button type='circle' comment
								_onClick={deleteComment}>
									<Icons.Trash color='var(--primary-gray)'/>
								</Button>	
							</>
						)}
					</Aligned>

					<Aligned>
						<Button comment type='circle'>
							<Icons.ThumbsUp color='var(--primary-gray)' />
						</Button>
						<StyledText>유용함</StyledText>
					</Aligned>
				</Aligned>

				{isEditMode ? (
					<CommentEdit props={props} isEditMode/>
				) : ('')}
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

export default CommentCard;
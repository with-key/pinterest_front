import React, { useState } from 'react';
import styled from 'styled-components';
//----- elements & components -----//
import { Flex, Input, Button, Image } from '../elem';
//----- redux -----//
import { useDispatch } from 'react-redux';
import { commentActions } from '../modules/comment';

const CommentEdit = (props) => {
	const dispatch = useDispatch();
	const [modifiedComment, setModifiedComment] = useState(props.props.commentContents)
	const commentId = props.props.commentId;
	// 수정
	const resetComment = () => {
		setModifiedComment('');
	};
	const submitComment = () => {
		if (modifiedComment.match(/\s/g) || !modifiedComment ) {
			window.alert('내용을 입력하세요.')
			return;
		}
		dispatch(commentActions.__editComment(commentId, modifiedComment));
		setModifiedComment('');
	};
	
	return (
		<React.Fragment>
			<Flex mg='0 0 0 16px'> 
				<Flex ai='center'>
					<Image shape='circle' size='36' />
				</Flex>
				<Flex width='100%' mg='0 0 0 16px'>
					<Input
						placeholder='댓글 추가'
						comment
						value={modifiedComment}
						_onChange={(e) => {
							setModifiedComment(e.target.value);}}
						onKeyPress={(e) => {
							if (e.key === 'Enter') {
								submitComment();
						}}}
					/>
				</Flex>
			</Flex>

			<Flex jc='flex-end'>
				<StyledBtn children='취소' secondary _onClick={resetComment} />
				{modifiedComment ? (
					<StyledBtn children='완료' primary _onClick={submitComment} />
				) : (
					<StyledBtn children='완료' primary disabled />
				)}
			</Flex>
		</React.Fragment>
	);
};

const StyledBtn = styled(Button)`
	width: 60px;
	height: 40px;
	margin: 16px 0px 16px 8px;
`;

export default CommentEdit;
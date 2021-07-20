import React, { useState } from 'react';
import styled from 'styled-components';
//----- elements & components -----//
import { Flex, Input, Button, Image } from '../elem';
//----- redux -----//
import { useDispatch } from 'react-redux';
import { commentActions } from '../modules/comment';

const CommentEdit = (props) => {
	const dispatch = useDispatch();
	const [modifiedComment, setModifiedComment] = useState(props.props.commentContent)
	const comment_id = props.props.id;
	// 수정
	const previousComment = props.props;
	const resetComment = () => {
		setModifiedComment('');
	};
	const submitComment = () => {
		dispatch(commentActions.__editComment(comment_id, modifiedComment, previousComment));
		setModifiedComment('');
	};
	// 삭제
	const deleteComment = () => {
		const result = window.confirm('댓글을 삭제하시겠습니까?');
		if (result) {
			dispatch(commentActions.__deleteComment(comment_id));
		}	
	}
	
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

			<Flex jc='space-between'>
				<Flex style={{marginLeft: '64px'}}>
					<StyledBtn children='삭제' primary _onClick={deleteComment} />
				</Flex>
				<Flex>
					<StyledBtn children='취소' secondary _onClick={resetComment} />
					{modifiedComment ? (
						<StyledBtn children='완료' primary _onClick={submitComment} />
					) : (
						<StyledBtn children='완료' primary disabled />
					)}
				</Flex>
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
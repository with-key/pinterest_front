import React from 'react';
import styled from 'styled-components';
//----- elements & components -----//
import { Flex, Input, Button, Image, } from '../elem';
//----- redux -----//
import { useDispatch} from 'react-redux';
import { commentActions } from '../modules/comment';

const CommentWrite = (props) => {
	const dispatch = useDispatch();
	const [comment, setComment] = React.useState('');
	const pinid = props.match.params.id;

	const resetComment = () => {
		setComment('');
	}
	const submitComment = () => {
		dispatch(commentActions.__postComment(pinid, comment));
		setComment('');
	}
	
	return (
		<React.Fragment>
			<Flex>
				<Flex>
					<Image shape='circle' size='48' />
				</Flex>
				<Flex width='100%' mg='0 0 0 16px'>
					<Input placeholder='댓글 추가' comment 
						value={comment}
						_onChange={(e) => {
							setComment(e.target.value);
						}}/>
				</Flex>
				
			</Flex>

			<Flex jc='flex-end'>
				<StyledBtn children='취소' secondary _onClick={resetComment} />				
				{comment ? 
					( <StyledBtn children='완료' primary _onClick={submitComment} /> ) :
					(	<StyledBtn children='완료' primary disabled	/> )					
				}
			</Flex>

		</React.Fragment>
	);
};

const StyledBtn = styled(Button)`
	width: 60px;
	height: 40px;
	margin: 16px 0px 16px 8px;
`

export default CommentWrite;
import React, { useEffect } from 'react';
import styled from 'styled-components';
//----- elements & components -----//
import { Flex, Text } from '../elem';
import CommentWrite from './CommentWrite';
import CommentCard from './CommentCard';
//----- redux -----//
import { useDispatch, useSelector } from 'react-redux';
import { commentActions } from '../modules/comment';

const CommentList = (props) => {
	const dispatch = useDispatch();

	// 해당 핀 댓글 목록 가져오기
	const id = props.match.params.id;
	useEffect(() => {
		dispatch(commentActions.__getCommentList(id));
	}, []);
	const comment_list = useSelector((state)=> (state.comment.list));
	const comment_count = comment_list.length	
	
	return (
		<React.Fragment>
			<Section> 
				
				{/* 목록 정보 및 토글 */}				
					{ ( comment_count === 0 ) ? (
						<Flex mg='16px 0' ai='center'>						
							<Text size='2.0rem' weight='700'>
								댓글
							</Text>
						</Flex>
						)
						: (
						<Flex mg='16px 0' ai='center'>						
							<Text size='2.0rem' weight='700'>
							댓글 {comment_count} 개 
							</Text>
						</Flex>	
						)	}						
					{ ( comment_count === 0 ) && (
						<Flex>
							<Text size='1.2rem' weight='400' >
								피드백을 공유하거나 질문을 하거나 칭찬을 남겨주세요
							</Text>
						</Flex>
					) }
									
				{/* 목록 */}
				<Section> 
					{comment_list ? (			
						comment_list.map((comment) => {
						return ( <CommentCard key={comment.id} {...comment}/>	);
					})
					) : ('')}
				</Section>

				{/* 쓰기 */}
				<Section> 	
					<CommentWrite match={props.match} />
				</Section>

			</Section>		
		</React.Fragment>
	);
};

const Section = styled(Flex)`	
	width: 100%;
	margin: 8px 0;
	flex-direction: column;
`
export default CommentList;

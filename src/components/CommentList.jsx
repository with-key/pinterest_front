import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
//----- elements & components -----//
import { Text, Button, Flex, Icons } from '../elem';
import CommentWrite from './CommentWrite';
import CommentCard from './CommentCard';
//----- redux -----//
import { useDispatch, useSelector } from 'react-redux';
import { commentActions } from '../modules/comment';

const CommentList = (props) => {
	const dispatch = useDispatch();
	const [isCommentVisible, setIsCommentVisible] = useState(false);
	// 해당 핀 댓글 목록 가져오기
	const id = props.match.params.id;
	useEffect(() => {
		dispatch(commentActions.__getCommentList(id));
	}, []);
	const comment_list = useSelector((state)=> (state.comment.list));
	const comment_count = comment_list.length	

	const user_id = useSelector((state)=> (state.user));
	// console.log(user_id); // 서버테스트 후 수정
	return (
		<React.Fragment>
			<Section> 
				<Flex ai='center'>
					{/* 댓글 수 출력 */}	
					{ ( comment_count === 0 ) ? (												
						<Text size='2.0rem' weight='700'>
							댓글
						</Text>						
					)	: (												
						<Text size='2.0rem' weight='700'>
							댓글 {comment_count} 개 
						</Text>						
					)	}
					{/* 토글 */}	
					<Button
						type='circle'
						_onClick={() => {
						setIsCommentVisible(!isCommentVisible);
						}} >
						{!isCommentVisible ? (<Icons.ArrowRight />) : (<Icons.ArrowDown />)}
					</Button>
				</Flex>	
				
				{isCommentVisible && (
					<Section> 
					{ comment_list ? (			
						comment_list.map((comment) => {
							if(comment.user.userId === user_id) {
								return (
									<CommentCard key={comment.id} {...comment} />
								);
							} else {
								return (
									<CommentCard key={comment.id} {...comment} isMyComment/>
								);
								// 테스트 위해 일치하지 않을 경우 보이게 넣어둠, 나중에 교체
							}
					})) : ('')}
					{ ( comment_count === 0 ) ? (												
					<Flex>
						<Text size='1.2rem' weight='400' >
							피드백을 공유하거나 질문을 하거나 칭찬을 남겨주세요
						</Text>
					</Flex>			
					)	: ('')}
					</Section>
				)}

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

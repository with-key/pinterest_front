import React from 'react';
import styled from 'styled-components';
//----- elements & components -----//
import { Flex, Input, Button, Image, } from '../elem';

const CommentWrite = (props) => {
	return (
		<React.Fragment>
			<Flex>
				<Flex>
					<Image shape='circle' size='48' />
				</Flex>
				<Flex width='100%' mg='0 0 0 16px'>
					<Input placeholder='댓글 추가' comment />
				</Flex>
				
			</Flex>

			<Flex jc='flex-end'>
				<StyledBtn children='취소' secondary/>
				<StyledBtn children='완료' secondary disabled />
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
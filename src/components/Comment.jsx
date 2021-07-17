import React from 'react';
import {Text, Flex, Input, Button, Image} from '../elem';

const CommentList = () => {
  return (
    <React.Fragment>
      <Flex style={{flexDirection: 'column',}}>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentWrite />
      </Flex>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {

  const {user_profile, user_name, user_id, post_id, contents, insert_dt} = props;
  return (
    <Flex style={{flexDirection: 'row',}}>
      <Image shape='circle' size='48'/>
      <Flex center width='auto'>
        <Text size='1.6rem'  mg='0 8px' weight='700'>{user_name}</Text>
        <Text size='1.4rem' color='var(--primary-gray)'>12주</Text>
      </Flex>
      <Flex center margin='0px 4px'>
        <Text mg='0px'>{contents}</Text>                
      </Flex>
    </Flex>
  )
}

const CommentWrite = () => {
  return (
    <React.Fragment>
      <Flex width='100%'>
        <Image shape='circle' size='48'/>
        <Input placeholder='댓글 추가' mg='0px 8px'/>
        <Button width='50px' >작성</Button>
      </Flex>
    </React.Fragment>
  );
}

CommentItem.defaultProps = {
  user_profile: '',
  user_name: 'username',
  user_id: '',
  post_id: 1,
  contents: '기본 댓글',
  insert_dt: '2021-01-01 19:00:00'
}
import React, { useState } from 'react';
import styled from 'styled-components';

import { Text, Flex, Input, Button, Image, Icons } from '../elem';
import TimeCounting from 'time-counting';
import Dropdown from '../components/Dropdown';

const CommentList = (props) => {
	return (
		<React.Fragment>
			<Flex width='100%' style={{ flexDirection: 'column' }} jc='stretch'>
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
	//모듈 작성하면서 key 수정
	const {
		user_profile,
		user_name,
		user_id,
		post_id,
		contents,
		insert_dt,
		likecount,
	} = props;

	// 메뉴 펼치기 토글
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [floatMenu, setFloatMenu] = useState();
	const toggleMenuField = (e) => {
		setIsMenuVisible((setIsMenuVisible) => !setIsMenuVisible);
		setFloatMenu({
			top: `${e.pageY + 20}px`,
			left: `${e.pageX - 20}px`,
		});
	};

	return (
		<Flex style={{ flexDirection: 'row' }} mg='8px 0'>
			<Image shape='circle' size='48' />
			<Flex jc='stretch' style={{ flexGrow: 1, flexDirection: 'column' }}>
				<Flex
					mg='0 0 0 16px'
					pd='12px'
					jc='stretch'
					style={{
						flexGrow: 1,
						flexDirection: 'column',
						border: '1px solid var(--secondary-lightgray)',
						borderRadius: '16px',
					}}
				>
					<Flex
						width='100%'
						style={{ flexDirection: 'row' }}
						ai='center'
						jc='stretch'
					>
						<Text size='1.4rem' mg='0 8px 0 0' weight='700'>
							{user_name}
						</Text>
						<Text size='1.2rem' color='var(--primary-gray)'>
							{TimeCounting(insert_dt, { lang: 'ko' })}
						</Text>
					</Flex>
					<Flex>
						<Text size='1.2rem' mg='8px 0 0'>
							{contents}
						</Text>
					</Flex>
				</Flex>
				<Flex mg='4px 0 0 8px' ai='center' jc='space-between'>
					<Flex ai='center'>
						<Button height='32px' type='circle'>
							<Icons.Like color='var(--primary-gray)' />
						</Button>
						<Text size='1.2rem' color='var(--primary-gray)'>
							{likecount}
						</Text>
						<Button height='32px' type='circle'>
							<Icons.MessageSmall color='var(--primary-gray)' />
						</Button>
						<Button height='32px' type='circle' _onClick={toggleMenuField}>
							<Icons.MeatballsMenu color='var(--primary-gray)' />
						</Button>
					</Flex>
					{/* 글 수정/삭제 토글 */}
					{isMenuVisible ? (
						<FloatMenu style={floatMenu}>
							<Dropdown width='180px' style={{ padding: '8px' }}>
								<Link>
									<Text
										size='1.4rem'
										weight='700'
										color='var(--primary-black)'
										mg='12px 8px'
									>
										수정
									</Text>
								</Link>
								<Link>
									<Text
										size='1.4rem'
										weight='700'
										color='var(--primary-black)'
										mg='12px 8px'
									>
										삭제
									</Text>
								</Link>
							</Dropdown>
						</FloatMenu>
					) : null}

					<Flex ai='center'>
						<Button height='32px' type='circle'>
							<Icons.ThumbsUp color='var(--primary-gray)' />
						</Button>
						<Text size='1.2rem' color='var(--primary-gray)'>
							유용함
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
};

const CommentWrite = (props) => {
	return (
		<React.Fragment>
			<Flex style={{ flexDirection: 'row' }}>
				<Image shape='circle' size='48' />
				<Flex
					mg='0 0 0 16px'
					jc='stretch'
					style={{
						flexGrow: 1,
					}}
				>
					<Input width='auto' placeholder='댓글 추가' comment />
				</Flex>
			</Flex>
			<Flex width='auto' jc='flex-end'>
				<Button
					mg='16px 8px'
					width='60px'
					height='40px'
					children='취소'
					secondary
				/>
				<Button
					mg='16px 0'
					width='60px'
					height='40px'
					children='완료'
					secondary
					disabled
				/>
			</Flex>
		</React.Fragment>
	);
};

CommentItem.defaultProps = {
	user_profile: '',
	user_name: 'username',
	user_id: '',
	_id: 1,
	contents: 'user_comment',
	likecount: 1,
	insert_dt: '2021-01-01 19:00:00',
};

const FloatMenu = styled.div`
	position: fixed;
	/* position: absolute; */
	z-index: 999;
`;
const Link = styled.a`
	cursor: pointer;
	&:hover {
		background-color: var(--primary-lightgray);
		border-radius: 12px;
	}
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import MenuToggle from './MenuToggle';
import { Button, Flex, Text } from '../elem';
import ImgUploader from '../components/ImgUploader';
import { useDispatch, useSelector } from 'react-redux';

const AddForm = ({ children }) => {
	// 여러개 입력 페이지는 시간 남으면 할게요...🥲
	// const newForm = useSelector((store) => store.pin.formCnt);
	const dispatch = useDispatch();
	const [contents, setContents] = useState({
		pinTitle: '',
		pinContent: '',
		pinUrl: '',
		pinImage: '',
	});

	const changeHandler = (e) => {
		const { value, name } = e.target;
		setContents({ ...contents, [name]: value });
	};
	const addPinHandler = () => {
		dispatch();
	};

	return (
		<Container>
			<Flex jc='space-between'>
				<MenuToggle list={['수정', '삭제', '편집']} />
				<Button primary _onClick={addPinHandler}>
					저장
				</Button>
			</Flex>
			<Flex width='100%'>
				<Flex width='50%' dr='column'>
					<ImgUploader></ImgUploader>
					<Button>사이트에서 저장</Button>
				</Flex>
				<Flex width='50%' dr='column'>
					<Input
						name='pinTitle'
						placeholder='제목추가'
						onChange={changeHandler}
					/>
					<Input
						name='pinContent'
						placeholder='사람들에게 회원님의 핀에 대해 설명해보세요'
						onChange={changeHandler}
					/>
				</Flex>
			</Flex>
		</Container>
	);
};

const Input = styled.input`
	::placeholder {
		font-size: 1rem;
		line-height: 40px;
	}
	vertical-align: top;
	line-height: 40px;
	border: none;
	font-size: 3.6rem;
	height: 40px;
	border-bottom: 1px solid red;
	outline: none;
`;

const Container = styled.div`
	width: 880px;
	padding: 40px 40px 0 40px;
	height: 650px;
	border: 1px solid red;
`;

export default AddForm;

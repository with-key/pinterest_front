import React, { useState, useRef } from 'react';
import AWS from 'aws-sdk';
import styled, { css } from 'styled-components';

import { Button, Flex, Text, Input, Icons, Avatar } from '../elem';
import ImgUploader from '../components/ImgUploader';
import { useDispatch, useSelector } from 'react-redux';
import Drop from './Drop';
import { preview, uploadImgeToS3 } from '../modules/image';
import { __addPin } from '../modules/pin';

const AddForm = ({ history }) => {
	const dispatch = useDispatch();
	const fileInput = useRef();
	const previewUrl = useSelector((store) => store.image.preview);
	const [saveAtSite, setSaveAtSite] = useState(false);
	const [noImageAlert, setNoImageAlert] = useState(false);
	const [noContentAlert, setNoContentAlert] = useState(false);
	const [contents, setContents] = useState({
		pinTitle: '',
		pinContent: '',
		pinImage: '',
	});

	const changeHandler = (e) => {
		const { value, name } = e.target;
		setContents({ ...contents, [name]: value });
	};

	// Upload to S3 image bucket!
	const addPinHandler = async (e) => {
		const file = fileInput.current.files[0];
		if (!file) {
			setNoImageAlert(true);
			return;
		}

		if (contents.pinTitle === '' || contents.pinContent === '') {
			setNoContentAlert(true);
			return;
		}

		const upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: 'mypin',
				Key: file.name,
				Body: file,
			},
		});

		const { Location } = await upload.promise();
		dispatch(uploadImgeToS3(Location));
		dispatch(__addPin(contents));
	};

	return (
		<Container>
			<Flex jc='space-between' mg='0 0 20px 0'>
				<Drop.Container
					direction='bottom'
					size='48px'
					type='menu'
					history={history}
				>
					<Drop.Item>복제</Drop.Item>
					<Drop.Item>삭제</Drop.Item>
				</Drop.Container>

				<Button primary _onClick={addPinHandler}>
					저장
				</Button>
			</Flex>
			<Flex width='100%' height='520px'>
				<Flex width='50%' dr='column' pd='0 24px' jc='space-between'>
					<Flex ai='center'>
						{previewUrl === '' ? (
							''
						) : (
							<Button
								type='circle'
								_onClick={(e) => {
									dispatch(preview(''));
									fileInput.current.value = '';
								}}
							>
								<Icons.Trash />
							</Button>
						)}
						<ImgUploader
							fileInput={fileInput}
							noImageAlert={noImageAlert}
							setNoImageAlert={setNoImageAlert}
						/>
					</Flex>
					{saveAtSite ? (
						<SaveAtSite>
							<StBtn
								_onClick={() => {
									setSaveAtSite(false);
								}}
							>
								<Icons.ArrowRight />
							</StBtn>
							<StInput
								name='pinUrl'
								_onChange={changeHandler}
								placeholder='웹 사이트 입력'
							/>
						</SaveAtSite>
					) : (
						<Button
							_onClick={() => {
								setSaveAtSite(true);
							}}
							width='100%'
							color='var(--primary-black)'
						>
							사이트에서 저장
						</Button>
					)}
				</Flex>
				<Flex width='50%' dr='column' jc='space-between'>
					<Flex dr='column' gap='70px' pd='30px 0 0 0'>
						<UnderlineInput
							noContentAlert={noContentAlert}
							name='pinTitle'
							placeholder='제목추가'
							onChange={changeHandler}
						/>
						<Flex ai='center' gap='10px'>
							<Avatar>
								{localStorage.getItem('userId').slice(0, 1).toUpperCase()}
							</Avatar>
							<Text size='1.4rem' weight='700'>
								{localStorage.getItem('userId')}
							</Text>
						</Flex>
						<UnderlineInput
							noContentAlert={noContentAlert}
							name='pinContent'
							placeholder='사람들에게 회원님의 핀에 대해 설명해보세요'
							onChange={changeHandler}
						/>
					</Flex>
					<Div>
						<UnderlineInput
							noContentAlert={noContentAlert}
							placeholder='렌딩 페이지 링크 추가'
							onChange={changeHandler}
						/>
					</Div>
				</Flex>
			</Flex>
		</Container>
	);
};

const UnderlineInput = styled.input`
	::placeholder {
		font-size: 1rem;
		line-height: 40px;
	}
	vertical-align: top;
	padding: 0 10px;
	line-height: 40px;
	border: none;
	&:focus {
		border-bottom: 2px solid var(--secondary-blue);
	}
	font-size: 3.6rem;
	height: 40px;
	outline: none;
	${(props) =>
		props.noContentAlert &&
		css`
			background-color: #fef7f8;
		`}
`;

const Div = styled.div``;

const Container = styled.div`
	background-color: var(--primary-white);
	width: 880px;
	padding: 30px 40px 0 40px;
	height: 650px;
	border-radius: 24px;
`;

const StBtn = styled(Button)`
	position: absolute;
	padding-left: 65px;
	display: flex;
	align-items: center;
	right: 0;
	width: 30%;
	border-radius: 0px 8px 8px 0 !important;
	box-shadow: none !important;
`;

const StInput = styled(Input)`
	position: absolute;
	width: 85%;
	top: 0;
	background-color: var(--primary-white);
	z-index: 1;
`;

const SaveAtSite = styled.div`
	width: 100%;
	height: 50px;
	position: relative;
`;
export default AddForm;

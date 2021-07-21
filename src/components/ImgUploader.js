import AWS from 'aws-sdk';
import styled from 'styled-components';
import { preview } from '../modules/image';
import { useDispatch, useSelector } from 'react-redux';

const ImgUploader = ({ fileInput, noImageAlert, setNoImageAlert }) => {
	const dispatch = useDispatch();
	const imgUrl = useSelector((store) => store.image.preview);
	const result = imgUrl === '';

	// preview (only in redux (base64))
	const imagePreview = () => {
		const reader = new FileReader();
		const file = fileInput.current.files[0];

		if (file) {
			reader.readAsDataURL(file);
		}

		reader.onloadend = () => {
			dispatch(preview(reader.result));
		};
		setNoImageAlert(false);
	};

	AWS.config.update({
		region: 'ap-northeast-2',
		credentials: new AWS.CognitoIdentityCredentials({
			IdentityPoolId: 'ap-northeast-2:c5f7eeba-60e4-4887-b943-cca4271abd60',
		}),
	});

	return (
		<>
			<Input
				ref={fileInput}
				type='file'
				id='upload'
				className='image-upload'
				onChange={imagePreview}
			/>
			{noImageAlert ? (
				<Label
					htmlFor='upload'
					result={result}
					style={{
						backgroundColor: '#FEF7F8',
						color: '#E60023',
					}}
				>
					<Border result={result} style={{ border: '2px dashed #E60023' }}>
						{imgUrl ? (
							<Img src={`${imgUrl}`} alt='' />
						) : (
							'핀을 만드려면 이미지가 있어야 합니다'
						)}
					</Border>
				</Label>
			) : (
				<Label htmlFor='upload' result={result}>
					<Border result={result}>
						{imgUrl ? <Img src={`${imgUrl}`} alt='' /> : '클릭하여 업로드'}
					</Border>
				</Label>
			)}
		</>
	);
};

const Border = styled.div`
	position: absolute;
	width: 90%;
	height: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: ${(props) => (props.result ? '2px dashed var(--primary-gray)' : '')};
`;

const Img = styled.img`
	width: 100%;
`;

const Input = styled.input`
	outline: none;
	cursor: pointer;
	position: absolute;
	border: 1px solid red;
	z-index: -2;
`;

const Label = styled.label`
	font-size: 1.2rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 454px !important;
	position: relative;
	cursor: pointer;
	border-radius: 8px;
	background-color: ${(props) =>
		props.result ? 'var(--primary-lightgray)' : ''};
`;

export default ImgUploader;

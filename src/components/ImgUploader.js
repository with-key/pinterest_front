import AWS from 'aws-sdk';
import styled from 'styled-components';
import { preview } from '../modules/image';
import { useDispatch, useSelector } from 'react-redux';

const ImgUploader = () => {
	const dispatch = useDispatch();
	const imgUrl = useSelector((store) => store.image.preview);

	const handleFileInput = (e) => {
		const file = e.target.files[0];
		const upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: 'mypin',
				Key: file.name,
				Body: file,
			},
		});

		const promise = upload.promise();
		promise.then(
			({ Location }) => {
				dispatch(preview(Location));
			},
			(err) => alert('오류가 발생했습니다: ', err.message),
		);
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
				type='file'
				id='upload'
				className='image-upload'
				onChange={handleFileInput}
			/>
			<Label htmlFor='upload'>클릭하여 업로드</Label>
		</>
	);
};

const Input = styled.input`
	outline: none;
	cursor: pointer;
	position: absolute;
	border: 1px solid red;
	z-index: -1;
`;

const Label = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 340px !important;
	height: 454px !important;
	border: 1px solid red;
	cursor: pointer;
`;
export default ImgUploader;

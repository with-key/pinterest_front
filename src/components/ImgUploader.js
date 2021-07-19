import AWS from 'aws-sdk';

const ImgUploader = () => {
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
				console.log(Location);
				// dispatch
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
			<input
				type='file'
				id='upload'
				className='image-upload'
				onChange={handleFileInput}
			/>
			<label htmlFor='upload' className='image-upload-wrapper' />
		</>
	);
};

export default ImgUploader;

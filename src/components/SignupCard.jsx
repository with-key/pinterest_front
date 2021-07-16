import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupCard = () => {
	const formik = useFormik({
		initialValues: {
			userId: '',
			userName: '',
			pwd: '',
			pwdCheck: '',
		},

		validationSchema: Yup.object({
			userId: Yup.string()
				.email('이메일 형식이 아닙니다.')
				.required('아이디를 입력해주세요!'),
			userName: Yup.string().required('이름을 입력해주세요.'),
			pwd: Yup.string()
				.min(8, '비밀번호는 8자리 이상이여야 합니다.')
				.matches(/[a-zA-Z]/, '패스워드에는 반드시 영문을 포함해야합니다.')
				.required('패스워드를 입력해주세요.'),
			pwdCheck: Yup.string()
				.min(8, '비밀번호는 8자리 이상이여야 합니다.')
				.required('패스워드를 재입력해주세요')
				.oneOf([Yup.ref('pwd'), null], '비밀번호가 일치하지 않습니다.'),
		}),

		onSubmit: (values) => {
			// dispatch
		},
	});

	return (
		<Container>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<Label htmlFor='123'>아이디</Label>
					<input
						name='userId'
						type='text'
						onChange={formik.handleChange}
						value={formik.values.userId}
					/>
					{formik.touched.userId && formik.errors.userId ? (
						<HelperMsg>{formik.errors.userId}</HelperMsg>
					) : null}
				</div>
				<div>
					<Label htmlFor='userName'>이름</Label>
					<input
						name='userName'
						type='text'
						onChange={formik.handleChange}
						value={formik.values.userName}
					/>
					{formik.touched.userName && formik.errors.userName ? (
						<HelperMsg>{formik.errors.userName}</HelperMsg>
					) : null}
				</div>
				<div>
					<Label htmlFor='pwd'>비밀번호</Label>
					<input
						name='pwd'
						type='password'
						onChange={formik.handleChange}
						value={formik.values.pwd}
					/>
					{formik.touched.pwd && formik.errors.pwd ? (
						<HelperMsg>{formik.errors.pwd}</HelperMsg>
					) : null}
				</div>
				<div>
					<Label htmlFor='pwdCheck'>비밀번호 확인</Label>
					<input
						name='pwdCheck'
						type='password'
						onChange={formik.handleChange}
						value={formik.values.pwdCheck}
					/>
					{formik.touched.pwdCheck && formik.errors.pwdCheck ? (
						<HelperMsg>{formik.errors.pwdCheck}</HelperMsg>
					) : null}
				</div>
				<button type='submit' full>
					가입하기
				</button>
			</form>
		</Container>
	);
};

const Container = styled.section`
	min-width: 400px;
`;

const Label = styled.label`
	font-size: 1.6rem;
	display: block;
	margin-bottom: 1rem;
`;

const HelperMsg = styled.div`
	margin-top: 1rem;
	font-size: 1.4rem;
	color: red;
`;
const div = styled.div`
	margin: 3.5rem 0;
`;

export default SignupCard;

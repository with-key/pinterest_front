import React from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Text } from '../elem';
import { useDispatch } from 'react-redux';
import { userAcions } from '../modules/user';

const LoginForm = () => {
	const dispatch = useDispatch();
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},

		validationSchema: Yup.object({
			email: Yup.string()
				.email('올바른 이메일 주소가 아닙니다.')
				.required('빠뜨린 부분이 있네요! 잊지 말고 이메일을 추가하세요.'),
			password: Yup.string()
				.min(6, '비밀번호가 너무 짧네요! 6자 이상 입력하세요.')
				.matches(/[a-zA-Z]/, '더 강력한 비밀번호를 사용하세요.')
				.required('패스워드를 입력해주세요.'),
		}),

		onSubmit: (values) => {
			dispatch(userAcions.__login(values));
		},
	});

	return (
		<Container>
			<Text size='3.2rem'>Pinterest에 오신 것을 환영합니다.</Text>
			<Text>시도해 볼 만한 새로운 아이디어 찾기</Text>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<Input
						name='email'
						type='text'
						onChange={formik.handleChange}
						value={formik.values.email}
						placeholder='이메일'
					/>
					{formik.touched.email && formik.errors.email ? (
						<Text color='#e60023'>{formik.errors.email}</Text>
					) : null}
				</div>
				<div>
					<Input
						name='password'
						type='password'
						onChange={formik.handleChange}
						value={formik.values.password}
						placeholder='비밀번호를 입력하세요'
					/>
					{formik.touched.password && formik.errors.password ? (
						<Text color='#e60023'>{formik.errors.password}</Text>
					) : null}
				</div>
				<Text>비밀번호를 잊으셨나요?</Text>
				<button type='submit'>로그인</button>
			</form>
			<Text>또는</Text>
			<button>Facebook으로 계속하기</button>
			<button>Google으로 계속하기</button>
			<Text>
				계속 진행하면 Pinterest 서비스 약관에 동의하고 개인정보 보호정책을
				읽었음을 인정하는 것으로 간주됩니다.
			</Text>
			<Text>이미 회원이신가요? 로그인하기</Text>
			<GoBusiness>무료 Business 계정 만들기</GoBusiness>
		</Container>
	);
};
const GoBusiness = styled.div`
	position: absolute;
	width: 100%;
	height: 62px;
	border: 1px solid red;
	left: 0;
	bottom: 0;
	border-radius: 0 0 32px 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

const Container = styled.section`
	position: relative;
	width: 430px;
	height: 730px;
	border: 1px solid red;
	border-radius: 32px;
	padding: 24px 10px 24px 10px;
`;

const Input = styled.input`
	outline: none;
	border-radius: 16px;
	font-size: 1.6rem;
	height: 28px;
	width: 265px;
	padding: 8px 16px;
	box-sizing: content-box;
	&:focus {
		box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
			rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
			rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
	}
`;

export default LoginForm;

import React from 'react';
import styled from 'styled-components';

// components
import Template from '../components/Template';
import Button from '../elem/Button'; //for test
import Input from '../elem/Input'; //for test

const Home = ({ history }) => {
	// console.log(history);
	return (
		<React.Fragment>
			<Template>
				<Container>
					<>
						<ImgCard>Pin linked to Detail</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>

						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>

						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>
						<ImgCard>Pin</ImgCard>

						<Input />
						<Button children={'Test'}/>
						
					</>	
				</Container>
			</Template>;
		</React.Fragment>
	)
};

// for default view (Stackgrid 적용 전)
const Container = styled.section`
  width: 100%;
	padding: 0px 12px;
  display: grid;
	flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
	grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(8, 1fr);
  grid-auto-rows: 100px;
`;
const ImgCard = styled.section`
	height: 375px;
	margin: 0px 8px 40px;
	border-radius: 20px;
  box-sizing: border-box;
	display: flex;
	flex-direction: column;
	position: relative;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
`;


export default Home;

import React, {useState} from 'react';
import styled from 'styled-components';

// elements & components
import { Flex, Text, Input, Button, Image } from '../elem';
import Template from '../components/Template';
import Header from '../components/Header';
import PinList from '../components/PinList';
import Comment from '../components/Comment';

const PinDetail = ({ history }) => {
	// 댓글 펼치기 토글
	const [isCommentVisible, setIsCommentVisible] = useState(false);
	const toggleCommentField = () => {
		setIsCommentVisible((setIsCommentVisible) => !setIsCommentVisible);
	};
	return (
			<Template>
				<Header />
				{/* 돌아가기 버튼 위치 고정 - icon 변경 */}
        <Flex width='320px' style={{position:'absolute', top: '96px', left: '20px'}}>
          <Button children='<' height='48px' type='circle'/>
        </Flex>

				{/* 핀 상세 */}
				<Flex mg='80px 0px 0px' pd='12px'>   
					<Container>
						{/* 핀 이미지 블록 */}
						<Flex width='50%' pd='20px 0px 20px 20px' style={{flex: 'none'}}>
							<Image shape='relative' pinDetail width='100%'/>       
						</Flex>
						{/* 핀 내용 블록 */}
						<Section style={{
							padding: '32px', 
							flexDirection: 'column', 
							}}>
							<Section style={{flexDirection: 'column',}}>
								{/* 상단 버튼 블록 */}
								<Section style={{flexDirection: 'row', justifyContent: 'space-between'}}>
									<Button children='save' height='48px' type='circle' />
									<Button children='저장' width='64px' height='48px' primary/>
								</Section>            
								<Section style={{flexDirection: 'column'}}>
									<Text size='3.6rem' weight='700' mg='16px 0px'>
										Pin Title - Dummy Text Trend Alert: Maxi Dresses Spring 2019 | The Fashion Folks
									</Text>
									<Text size='1.6rem' weight='400' mg='8px 0px'>
										Pin Contents - Here's a trend alert on the maxi dresses spring 2019! How you can style this summer's most style item in a wearable way. Read more here:
									</Text>
								</Section>

								{/* 핀 작성자 블록 */}
								<Section style={{margin: '16px 0px'}}>
									<Image size='48'/>
									<Text size='1.6rem' weight='700' mg='0px 8px'>
										Username
									</Text>
								</Section>

								{/* 핀 댓글 블록 */} 
								<Section style={{margin: '16px 0px'}}>  
									<Text size='2.0rem' weight='700'>
										댓글 n 개 
									</Text>
									<Button children='>' height='52px' type='circle' _onClick={toggleCommentField} />
								</Section>
								<Section style={{margin: '16px 0px'}}> 
									{isCommentVisible ? <Comment /> : null}
								</Section>
							</Section>

							{/* 핀 즐겨찾기 블록 */} 
							<Section>
								<Image size='32'/>
								<Text size='1.6rem' weight='700' mg='0px 8px'>
									Username
								</Text>
								<Text size='1.6rem' weight='400'>
									님이 저장
								</Text>
							</Section>

						</Section>
					</Container>
				</Flex>

				{/* 유사한 핀 더 보기 ; 텍스트 변경 */}
				<Flex center>
          <Text size='2.2rem' weight='700'>유사한 핀 더 보기</Text>
      	</Flex>
				<PinList />
			</Template>
	)
};

const Container = styled.section`
width: 1020px;
height: auto;
margin: 0px 0px 40px;
background-color: var(--primary-white);
box-sizing: border-box;
border: none;
border-radius: 32px;
display: flex;
flex-direction: row;
position: relative;
align-items: center;
justify-content: center;
box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
`;
const Section = styled.div`
width: 100%;
display: flex;
align-items: center;
/* justify-content: ; */
`;

export default PinDetail;
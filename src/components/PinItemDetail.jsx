import React from 'react';
import styled from 'styled-components';

// elements
import { Flex, Text, Input, Button, Image } from '../elem';

const PinItemDetail = (props) => {
	// console.log(history);
  // 뷰 정리
	return (
		<React.Fragment>
      <Flex pd='12px' style={{flexDirection: 'column'}}>
        
        <Flex>

          <Flex width={'320px'} style={{position:'absolute', top: '96px', left: '20px'}}>
            <Text size={'2.0rem'} weight={'700'}>
              <Button children={'<'} height={'48px'} type={'circle'}/>
              추천
            </Text>
          </Flex>
          
          <Flex width={'auto'}>
            <Container>
              <Section style={{
                width: '50%',
                backgroundSize: 'cover',
                overflow:'hidden',
              }} bg={'#dddddd'} 
                src={'https://firebasestorage.googleapis.com/v0/b/react-assignment-27df2.appspot.com/o/images%2Fyana_hurskaya-HpQFPnCK7_A-unsplash.jpg?alt=media&token=7b7dec91-e2ef-4493-943a-a7e60fc1cba6'}
                >
              </Section>
              <Section style={{
                display: 'flex',
                padding: '32px',
                width: '50%',
                flexDirection: 'column',}}>
                <div style={{
                }}>
                  <Button children={'...'} height={'48px'} type={'circle'} />
                  <Button children={'*'} height={'48px'} type={'circle'} />
                  <Button children={'*'} height={'48px'} type={'circle'} />
                  <Button children={'저장'} width={'64px'} height={'52px'} primary/>
                </div>
                <div style={{
                  
                }}>
                  <Text size={'3.6rem'} weight={'700'}>Pin Title</Text>
                  <Text size={'1.6rem'} weight={'400'}>Pin contents</Text>
                  <Text size={'2.4rem'} weight={'700'}>
                    댓글 1개 <Button children={'>'} height={'52px'} type={'circle'}/>
                  </Text>
                  <Text size={'1.6rem'} weight={'400'}>Alien 님이 Chill에 저장</Text>

                </div>
                
              </Section>
            
            </Container>
          </Flex>

        </Flex>

        <Flex center>
           <Text size={'2.2rem'} weight={'700'}>유사한 핀 더 보기</Text>
        </Flex>

      </Flex>				
		</React.Fragment>
	)
};

// for default view (Stackgrid 적용 전)
const Container = styled.section`
  width: 1020px;
  height: 580px;
  margin: 0px 0px 48px;
  background-color: var(--primary-white);
  box-sizing: border-box;
  border: none;
  border-radius: 32px;
	display: flex;
	position: relative;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
`;
const Section = styled.div`
  height: 100%;
  /* background-color: var(--primary-white); */
  background-image: url('${(props) => props.src}');
  box-sizing: border-box;
  border: none;
  border-radius: 32px 0 0 32px;
	display: flex;
	position: relative;
  align-items: center;
  justify-content: center;
`;


export default PinItemDetail;
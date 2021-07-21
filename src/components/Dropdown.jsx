import React from 'react';
import styled, {css} from 'styled-components';
// elements
import {Text, Flex, Image, } from '../elem';

const Dropdown = (props) => {
  console.log(props.history)
  if (props.header) {
    return (
      <React.Fragment>
        <Container {...props}>
          <Flex dr='column' pd='8px 8px 0'>
            <HeadingText>
              현재 로그인 계정
            </HeadingText>
  
            <Link onClick={() => (props.history.push('/board'))}>
              <Flex pd='12px 8px' >
                <Image size='60' shape='circle'/>            
                <Flex dr='column' pd='0 8px'>
                  <Text size='1.6rem' weight='700' color='var(--primary-black)' mg='4px 0'>
                    Username
                  </Text>
                  <Text size='1.4rem' weight='400' color='var(--primary-gray)' mg='2px 0'>
                    Personal
                  </Text>
                  <Text size='1.4rem' weight='400' color='var(--primary-gray)' mg='2px 0'>
                    user_email@email.com
                  </Text>
                </Flex>
              </Flex>
            </Link>

          </Flex>
          
          <Flex dr='column' pd='8px 8px 0'>
            <HeadingText>
              내 계정
            </HeadingText>
  
            <MenuTextDisabled>
              계정 추가
            </MenuTextDisabled>
            <MenuTextDisabled>
              Business 계정으로 전환
            </MenuTextDisabled>
          </Flex>
  
          <Flex style={{flexDirection: 'column'}} pd='8px'>
            <HeadingText>
              옵션 더 보기
            </HeadingText>
  
            <MenuTextDisabled>
              설정
            </MenuTextDisabled>
            <MenuTextDisabled>
              홈피드 조정
            </MenuTextDisabled>
            <MenuTextDisabled>
              Chrome 앱 설치
            </MenuTextDisabled>
            <MenuTextDisabled>
              도움 받기
            </MenuTextDisabled>
            <MenuTextDisabled>
              약관 및 개인정보 보기
            </MenuTextDisabled>
            
            <Link>
              <MenuText>
                로그아웃
              </MenuText>
            </Link>
          </Flex>
  
        </Container>
      </React.Fragment>
    );
  } 

  return (
    <React.Fragment>
      <Container {...props}>
        {props.children}
      </Container>
    </React.Fragment>
  );
};

export default Dropdown;

const Container = styled.div`
width: ${(props) => props.width};
height: auto;
margin: 0px;
padding: ${(props) => props.pd};
background-color: var(--primary-white);
box-sizing: border-box;
border: none;
border-radius: ${(props) => (props.header ? '20px' : '12px')};
display: flex;
flex-direction: column;
justify-content: space-between;
box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
`;

const Link = styled.a`
  cursor: pointer;
  &:hover {
    background-color: var(--primary-lightgray);
    border-radius: 12px;
  }
`
const HeadingText = styled(Text)`
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--primary-black);
  margin: 8px;
`
const MenuText = styled(Text)`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary-black);
  margin: 10px 8px;
`
const MenuTextDisabled = styled(Text)`
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary-gray);
  margin: 10px 8px;
  cursor: not-allowed;
`
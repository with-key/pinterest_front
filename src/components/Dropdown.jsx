import React from 'react';
import styled, {css} from 'styled-components';
// elements
import {Text, Flex, Image, } from '../elem';

const Dropdown = (props) => {
  if (props.header) {
    return (
      <React.Fragment>
        <Container {...props}>
          <Flex style={{flexDirection: 'column'}} pd='8px 8px 0'>
            <Text size='1.2rem' weight='400' color='var(--primary-black)' mg='8px'>
              현재 로그인 계정
            </Text>
  
            <Link>
              <Flex pd='12px 8px' >
                <Image size='60' shape='circle'/>            
                <Flex style={{flexDirection: 'column'}} pd='0 8px'>
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
          
          <Flex style={{flexDirection: 'column'}} pd='8px 8px 0'>
            <Text size='1.2rem' weight='400' color='var(--primary-black)' mg='8px'>
              내 계정
            </Text>
  
            <Text size='1.6rem' weight='700' color='var(--primary-gray)' mg='10px 8px'>
              계정 추가
            </Text>
            <Text size='1.6rem' weight='700' color='var(--primary-gray)' mg='10px 8px'>
              Business 계정으로 전환
            </Text>
          </Flex>
  
          <Flex style={{flexDirection: 'column'}} pd='8px'>
            <Text size='1.2rem' weight='400' color='var(--primary-black)' mg='8px'>
              옵션 더 보기
            </Text>
  
            <Text size='1.6rem' weight='700' color='var(--primary-gray)' mg='10px 8px'>
              설정
            </Text>
            <Text size='1.6rem' weight='700' color='var(--primary-gray)' mg='10px 8px'>
              홈피드 조정
            </Text>
            <Text size='1.6rem' weight='700' color='var(--primary-gray)' mg='10px 8px'>
              Chrome 앱 설치
            </Text>
            <Text size='1.6rem' weight='700' color='var(--primary-gray)' mg='10px 8px'>
              도움 받기
            </Text>
            <Text size='1.6rem' weight='700' color='var(--primary-gray)' mg='10px 8px'>
              약관 및 개인정보 보기
            </Text>
            <Link>
              <Text size='1.6rem' weight='700' color='var(--primary-black)' mg='10px 8px'>
                로그아웃
              </Text>
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
padding: 0px;
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
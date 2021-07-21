import React from 'react';
import styled from 'styled-components';
import { Icons } from '.';

const Spinner = ({ type }) => {
  return (
    <React.Fragment>
      <Wrapper type={type}>
        <Icons.SpinnerIcon className='spinner'/>        
      </Wrapper>
    </React.Fragment>
  );
};

Spinner.defaultProps = {
  type: 'inline', // inline, page
  is_dim: false,
  size: 60,
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-white);
  padding: 20px 0;

  // 페이지 로딩 시
  ${(props) => props.type === 'page' ? `
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 0;
    zIndex: 9999;
  ` : ``}

  .spinner {
  animation: rotate_icon 1.2s linear infinite;
  transform-origin: 50% 50%;
  }
  @keyframes rotate_icon{
  100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
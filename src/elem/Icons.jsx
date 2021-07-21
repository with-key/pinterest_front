import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  & svg {
    fill: ${(props) => props.color};
  }
`;

// global
const SpinnerIcon = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        enable-background='new 0 0 20 20'
        height='48px'
        viewBox='0 0 20 20'
        width='48px'
        fill='#000000'
      >
        <g>
          <rect fill='none' height='20' width='20' />
        </g>
        <g>
          <g>
            <circle cx='5' cy='14' r='3' />
            <circle cx='10' cy='6' r='3' />
            <circle cx='15' cy='14' r='3' />
          </g>
        </g>
      </svg>
    </Wrapper>
  );
};

const MeatballsMenu = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='gUZ pBj'
        height='20'
        width='20'
        viewBox='0 0 24 24'
        aria-label='추가 옵션'
        role='img'
      >
        <path d='M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z'></path>
      </svg>
    </Wrapper>
  );
};

const Search = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='gUZ B9u U9O kVc'
        height='20'
        width='20'
        viewBox='0 0 24 24'
        aria-hidden='true'
        aria-label=''
        role='img'
      >
        <path d='M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88l-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24'></path>
      </svg>
    </Wrapper>
  );
};

const Export = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='gUZ pBj U9O kVc'
        height='20'
        width='20'
        viewBox='0 0 24 24'
        aria-hidden='true'
        aria-label=''
        role='img'
      >
        <path d='M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z'></path>
      </svg>
    </Wrapper>
  );
};

const Add = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='gUZ pBj U9O kVc'
        height='20'
        width='20'
        viewBox='0 0 24 24'
        aria-hidden='true'
        aria-label=''
        role='img'
      >
        <path d='M22 10h-8V2a2 2 0 0 0-4 0v8H2a2 2 0 0 0 0 4h8v8a2 2 0 0 0 4 0v-8h8a2 2 0 0 0 0-4'></path>
      </svg>
    </Wrapper>
  );
};

const Pencil = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='gUZ pBj U9O kVc'
        height='20'
        width='20'
        viewBox='0 0 24 24'
        aria-hidden='true'
        aria-label=''
        role='img'
      >
        <path d='M13.386 6.018l4.596 4.596L7.097 21.499 1 22.999l1.501-6.096L13.386 6.018zm8.662-4.066a3.248 3.248 0 0 1 0 4.596L19.75 8.848 15.154 4.25l2.298-2.299a3.248 3.248 0 0 1 4.596 0z'></path>
      </svg>
    </Wrapper>
  );
};

const Adjust = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='gUZ pBj U9O kVc'
        height='20'
        width='20'
        viewBox='0 0 24 24'
        aria-hidden='true'
        aria-label=''
        role='img'
      >
        <path d='M9 19.5a1.75 1.75 0 1 1 .001-3.501A1.75 1.75 0 0 1 9 19.5M22.25 16h-8.321c-.724-2.034-2.646-3.5-4.929-3.5S4.795 13.966 4.071 16H1.75a1.75 1.75 0 0 0 0 3.5h2.321C4.795 21.534 6.717 23 9 23s4.205-1.466 4.929-3.5h8.321a1.75 1.75 0 0 0 0-3.5M15 4.5a1.75 1.75 0 1 1-.001 3.501A1.75 1.75 0 0 1 15 4.5M1.75 8h8.321c.724 2.034 2.646 3.5 4.929 3.5s4.205-1.466 4.929-3.5h2.321a1.75 1.75 0 0 0 0-3.5h-2.321C19.205 2.466 17.283 1 15 1s-4.205 1.466-4.929 3.5H1.75a1.75 1.75 0 0 0 0 3.5'></path>
      </svg>
    </Wrapper>
  );
};

const ArrowRight = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 0 24 24'
        width='24px'
      >
        <path d='M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z' />
      </svg>
    </Wrapper>
  );
};

const ArrowUp = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='36px'
        viewBox='0 0 24 24'
        width='36px'
      >
        <path d='M8.12 14.71L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.39-.39-1.02-.39-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z' />
      </svg>
    </Wrapper>
  );
};

const ArrowDown = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 0 24 24'
        width='24px'
      >
        <path d='M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z' />
      </svg>
    </Wrapper>
  );
};

const ArrowBack = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='Hn_ gUZ pBj'
        height='20'
        width='20'
        viewBox='0 0 24 24'
        aria-label='뒤로'
        role='img'
      >
        <path d='M8.415 4.586a2 2 0 1 1 2.828 2.828L8.657 10H21a2 2 0 0 1 0 4H8.657l2.586 2.586a2 2 0 1 1-2.828 2.828L1 12l7.415-7.414z'></path>
      </svg>
    </Wrapper>
  );
};

const ArrowDiagonal = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='Hn_ gUZ pBj'
        height='12'
        width='12'
        viewBox='0 0 24 24'
        aria-label='외부 링크'
        role='img'
      >
        <path d='M4.9283,1 C3.6273,1 2.5713,2.054 2.5713,3.357 C2.5713,4.66 3.6273,5.714 4.9283,5.714 L14.9523,5.714 L1.6893,18.976 C0.7703,19.896 0.7703,21.389 1.6893,22.31 C2.1503,22.771 2.7533,23 3.3573,23 C3.9603,23 4.5633,22.771 5.0243,22.31 L18.2853,9.047 L18.2853,19.071 C18.2853,20.374 19.3413,21.429 20.6433,21.429 C21.9443,21.429 23.0003,20.374 23.0003,19.071 L23.0003,1 L4.9283,1 Z'></path>
      </svg>
    </Wrapper>
  );
};

const Selected = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='gUZ pBj'
        height='16'
        width='16'
        viewBox='0 0 24 24'
        aria-label='선택한 옵션'
        role='img'
      >
        <path d='M9.17 21.75L.73 12.79c-.97-1.04-.97-2.71 0-3.75a2.403 2.403 0 0 1 3.53 0l4.91 5.22L19.74 3.03c.98-1.04 2.55-1.04 3.53 0 .97 1.03.97 2.71 0 3.74L9.17 21.75z'></path>
      </svg>
    </Wrapper>
  );
};

// header
const Logo = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='gUZ lZJ U9O kVc'
        height={`${props.size ? props.size : `24`}`}
        width={`${props.size ? props.size : `24`}`}
        viewBox='0 0 24 24'
        aria-hidden='true'
        aria-label=''
        role='img'
      >
        <path d='M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12'></path>
      </svg>
    </Wrapper>
  );
};

const Notification = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='gUZ pBj U9O kVc'
        height='24'
        width='24'
        viewBox='0 0 24 24'
        aria-hidden='true'
        aria-label=''
        role='img'
      >
        <path d='M12 24c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3zm7-10.83c1.58 1.52 2.67 3.55 3 5.83H2c.33-2.28 1.42-4.31 3-5.83V7c0-3.87 3.13-7 7-7s7 3.13 7 7v6.17z'></path>
      </svg>
    </Wrapper>
  );
};

const Message = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='Hn_ gUZ B9u U9O kVc'
        height='24'
        width='24'
        viewBox='0 0 24 24'
        aria-hidden='true'
        aria-label=''
        role='img'
      >
        <path d='M18 12.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 12.5m-6 0a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 6 12.5M12 0C5.925 0 1 4.925 1 11c0 2.653.94 5.086 2.504 6.986L2 24l5.336-3.049A10.93 10.93 0 0 0 12 22c6.075 0 11-4.925 11-11S18.075 0 12 0'></path>
      </svg>
    </Wrapper>
  );
};

// comment
const MessageSmall = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='Hn_ gUZ B9u U9O kVc'
        height='16'
        width='16'
        viewBox='0 0 24 24'
        aria-hidden='true'
        aria-label=''
        role='img'
      >
        <path d='M12 0C5.85 0 .75 4.94.75 11.08c0 2.7.9 5.24 2.7 7.19L2.1 23.51c-.15.3.3.6.6.45l5.25-2.55c1.35.45 2.7.75 4.05.75 6.15 0 11.25-4.94 11.25-11.08S18.15 0 12 0'></path>
      </svg>
    </Wrapper>
  );
};

const Like = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='gUZ B9u U9O kVc'
        height='16'
        width='16'
        viewBox='0 0 24 24'
        aria-label='helpful icon'
        role='img'
      >
        <path d='M22.178 13.583l-9.131 8.992a1.502 1.502 0 0 1-2.094 0l-9.131-8.992a6.192 6.192 0 0 1 0-8.773c2.439-2.413 6.395-2.413 8.834 0L12 6.154l1.344-1.344c2.439-2.413 6.395-2.413 8.834 0a6.192 6.192 0 0 1 0 8.773'></path>
      </svg>
    </Wrapper>
  );
};

const ThumbsUp = (props) => {
  return (
    <Wrapper {...props}>
      <svg
        className='gUZ B9u U9O kVc'
        height='16'
        width='16'
        viewBox='0 0 24 24'
        aria-label='helpful icon'
        role='img'
      >
        <path d='M21 14.09a2.1 2.1 0 01-2.11 2.08 2.1 2.1 0 012.11 2.1 2.1 2.1 0 01-2.11 2.08H16.5c1.02 0 1.85.82 1.85 1.82 0 1.01-.83 1.83-1.85 1.83H9.9A7.87 7.87 0 012 16.17c0-2.2.93-4.2 2.41-5.61 2.19-2.3 3.4-5.3 3.4-8.47A2.1 2.1 0 019.9 0a2.1 2.1 0 012.12 2.09c0 1.99-.37 3.92-1.05 5.74h7.9A2.1 2.1 0 0121 9.9a2.1 2.1 0 01-2.11 2.1A2.1 2.1 0 0121 14.09z'></path>
      </svg>
    </Wrapper>
  );
};

const Icons = {
	SpinnerIcon,
  MeatballsMenu,
  Search,
  Export,
  Add,
  Pencil,
  Adjust,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ArrowBack,
  ArrowDiagonal,
  Selected,
  Logo,
  Notification,
  Message,
  MessageSmall,
  Like,
  ThumbsUp,
};

export default Icons;

import React, { useState, useRef, useEffect } from 'react';
import styled, {css} from 'styled-components';
//----- elements & components -----//
import { Text, Button, Icons } from '../elem';

const ToggleButton = ({ edit, ...rest}) => {
  const dropdownMenu = useRef();
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [floatMenu, setFloatMenu] = useState();

  // 토글버튼 / 메뉴 바깥영역 클릭 시 닫기 / 일단 추후 수정
  const handleCloseMenu = (e) => {
    if (isMenuVisible && !dropdownMenu.current.contains(e.target)) {
		  setIsMenuVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener('click', handleCloseMenu);
    return () => {
      window.removeEventListener('click', handleCloseMenu);
    };
  }, []);

	// 핀 및 댓글 수정 버튼
	if (edit) {
		return (
			<StBtn
				{...rest}
				type='circle'
				_onClick={() => {
				setIsMenuVisible(!isMenuVisible);		
			}}
		>
			{ rest.comment ? 
				<Icons.MeatballsMenu color='var(--primary-gray)'/> :
				<Icons.MeatballsMenu color='var(--primary-black)'/> 
			}			
			{isMenuVisible && (
				<FloatMenu style={floatMenu} ref={dropdownMenu} {...rest}>
          {rest.children}
				</FloatMenu>
			)}
		</StBtn>
		)
	}

	return (
		<StBtn 
			type='circle'
			_onClick={() => {
				setIsMenuVisible(!isMenuVisible);
			}}
		>
			<Icons.ArrowUp />
			{isMenuVisible && (
				<FloatMenu style={floatMenu} ref={dropdownMenu}>
          {rest.children}
				</FloatMenu>
			)}
		</StBtn>
	);
};

const StBtn = styled(Button)`
	position: relative;
	/* z-index: 999; */
`;
const FloatMenu = styled.div`
	position: absolute;
	top: 120%;
	left: 50%;
	transform: translateX(-50%);
	${(props) =>
	props.comment &&
	css`
		top: -300%;
		left: 50%;
		transform: translateX(-50%);
	`}
`;

export default ToggleButton;
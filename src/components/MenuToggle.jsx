import React, { useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../components/Dropdown';
import { Text, Button, Icons } from '../elem';

const MenuToggle = ({ list }) => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [floatMenu, setFloatMenu] = useState();
	return (
		<StBtn
			type='circle'
			_onClick={() => {
				setIsMenuVisible(!isMenuVisible);
			}}
		>
			<Icons.ArrowUp />
			{isMenuVisible && (
				<FloatMenu style={floatMenu}>
					<Dropdown width='180px' style={{ padding: '8px' }}>
						{list.map((item) => (
							<Link>
								<Text
									size='1.4rem'
									weight='700'
									color='var(--primary-black)'
									mg='12px 8px'
								>
									{item}
								</Text>
							</Link>
						))}
					</Dropdown>
				</FloatMenu>
			)}
		</StBtn>
	);
};

const StBtn = styled(Button)`
	position: relative;
	z-index: 999;
`;

const FloatMenu = styled.div`
	position: absolute;
	top: 120%;
	left: 50%;
	transform: translateX(-50%);
`;

const Link = styled.div`
	cursor: pointer;
	&:hover {
		background-color: var(--primary-lightgray);
		border-radius: 12px;
	}
`;

// const FloatBtn = styled.button`
// 	width: 56px;
// 	height: 56px;
// 	border-radius: 56px;
// 	background-color: var(--primary-white);
// 	color: var(--primary-black);
// 	box-sizing: border-box;
// 	/* position: fixed; */
// 	text-align: center;
// 	vertical-align: middle;
// 	border: none;
// 	cursor: pointer;
// 	box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
// 	&:hover {
// 		background-color: var(--primary-lightgray);
// 	}
// `;

export default MenuToggle;

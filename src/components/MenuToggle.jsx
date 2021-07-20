import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import Dropdown from '../components/Dropdown';
import { Text, Button, Icons } from '../elem';

const MenuToggle = ({ list, editbtn, comment, ...rest }) => {
	const [isMenuVisible, setIsMenuVisible] = useState(false);
	const [floatMenu, setFloatMenu] = useState();
	return (
		<StBtn
			type='circle'
			_onClick={() => {
				setIsMenuVisible(!isMenuVisible);
			}}
		>
			{ editbtn ? <Icons.MeatballsMenu /> : <Icons.ArrowUp /> }			
			{isMenuVisible && (
				<FloatMenu style={floatMenu}>
					<Dropdown width='180px' style={{ padding: '8px' }}>
						{list.map((item, index) => (
							<Link key={index}>
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
	/* z-index: 999; */
	${(props) =>
	props.comment &&
	css`
		width: 32px;
		height: 32px;
		border-radius: 32px;
	`}
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

export default MenuToggle;

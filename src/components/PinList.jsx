import React from 'react';
import styled from 'styled-components';
import StackGrid, { transitions, easings } from 'react-stack-grid';
// elements & components
import { Flex } from '../elem';
import PinCard from './PinCard';

// redux
import { useSelector } from 'react-redux';

// stack-grid transition 설정
const transition = transitions.scaleUp;

const PinList = ({ history }) => {
  const pin_list = useSelector((state)=> (state.pin.list));
	return (
		<Container>
			<StackGrid
				monitorImagesLoaded
				columnWidth={236}
				gutterWidth={16}
				gutterHeight={16}
				appear={transition.appear}
				appeared={transition.appeared}
				enter={transition.enter}
				entered={transition.entered}
				leaved={transition.leaved}
				easing={easings.cubicOut}
				duration={80}
				appearDelay={1}
			>
			{pin_list.map((pin, index) => {
				return (
					<Flex 
						key={index}  
						style={{flexDirection: 'column'}}
						onClick={() => {history.push(`/pin/${pin.id}`)}}
						>
						<PinCard {...pin} history={history}/>
					</Flex>				
				)	
			})}
				
			</StackGrid>
		</Container>
	);
};

const Container = styled.header`
	width: 100%;
	padding: 0px 12px;
`;

export default PinList;

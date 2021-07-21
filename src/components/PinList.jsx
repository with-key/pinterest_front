import React from 'react';
import styled from 'styled-components';
import StackGrid, { transitions, easings } from 'react-stack-grid';
// elements & components
import { Flex } from '../elem';
import PinCard from './PinCard';
import InfiniteScroll from './InfiniteScroll';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { pinActions } from '../modules/pin';

// stack-grid transition 설정
const transition = transitions.scaleUp;

const PinList = ({ history }) => {
	const dispatch = useDispatch();
  const pin_list = useSelector((state)=> (state.pin.list));
	const isLoading = useSelector((state)=> (state.pin.isLoading));
	const paging = useSelector((state)=> (state.pin.paging));
	console.log(`state 내 page: ${paging.page} next: ${paging.next} size: ${paging.size}`)

	const callNextPage = () => {
		if (paging.next === false) {
			return;
		}
		setTimeout(() => {
			dispatch(pinActions.__getPinList(paging.page));
		}, 500)
	}

	return (
		<Container>
			<InfiniteScroll
					callNextPage = {callNextPage}
					isLoading={isLoading}
					isNext={ paging.next ? true : false }
			>
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
								onClick={() => {history.push(`/pin/${pin.pinId}`)}}
								>
								<PinCard {...pin} history={history}/>
							</Flex>				
						)	
					})}
				
				</StackGrid>
			</InfiniteScroll>
		</Container>
	);
};

const Container = styled.header`
	width: 100%;
	padding: 0px 12px;
`;

export default PinList;

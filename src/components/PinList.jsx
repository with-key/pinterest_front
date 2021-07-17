import React from 'react';
import styled from 'styled-components';
import StackGrid, { transitions, easings } from 'react-stack-grid';
// components
import PinCard from './PinCard';

const transition = transitions.scaleUp;

const PinList = ({ history }) => {
	return (
		<Container>
			<StackGrid
				monitorImagesLoaded
				columnWidth={240}
				appear={transition.appear}
				appeared={transition.appeared}
				enter={transition.enter}
				entered={transition.entered}
				leaved={transition.leaved}
				easing={easings.cubicOut}
				duration={80}
				appearDelay={1}
			>
				<PinCard key='key1' history={history}>
					Item 1
				</PinCard>
				<PinCard key='key2'>Item 2</PinCard>
				<PinCard key='key3'>Item 3</PinCard>
				<PinCard key='key4'>Item 4</PinCard>
				<PinCard key='key5'>Item 5</PinCard>
				<PinCard key='key6'>Item 6</PinCard>
				<PinCard key='key7'>Item 7</PinCard>
				<PinCard key='key8'>Item 8</PinCard>

				<PinCard key='key9'>Item 9</PinCard>
				<PinCard key='key10'>Item 10</PinCard>
				<PinCard key='key11'>Item 11</PinCard>
				<PinCard key='key12'>Item 12</PinCard>
				<PinCard key='key13'>Item 13</PinCard>
				<PinCard key='key14'>Item 14</PinCard>
				<PinCard key='key15'>Item 15</PinCard>
				<PinCard key='key16'>Item 16</PinCard>

				<PinCard key='key17'>Item 17</PinCard>
				<PinCard key='key18'>Item 18</PinCard>
				<PinCard key='key19'>Item 19</PinCard>
				<PinCard key='key20'>Item 20</PinCard>
				<PinCard key='key21'>Item 21</PinCard>
				<PinCard key='key22'>Item 22</PinCard>
				<PinCard key='key23'>Item 23</PinCard>
				<PinCard key='key24'>Item 24</PinCard>
			</StackGrid>
		</Container>
	);
};

const Container = styled.header`
	top: 84px;
	width: 100%;
	padding: 0px 12px;
	margin-top: 80px;
`;

export default PinList;

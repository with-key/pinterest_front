import React from 'react';
import styled from 'styled-components';

// components & elements
import Template from '../components/Template';
import Header from '../components/Header';
import PinList from '../components/PinList';
import { Flex, Text, Input, Button } from '../elem';

const PinDetail = ({ history }) => {
	// console.log(history);
	return (
			<Template>
				<Header />
				<Flex style={{height: '760px'}}>
					<Input />
					<Button children={'Test'} style={{width: '100px', height: '52px'}}/>
					<Text size={'2.4rem'}>유사한 핀 더 보기</Text>
				</Flex>				
				<PinList />
			</Template>
	)
};

export default PinDetail;
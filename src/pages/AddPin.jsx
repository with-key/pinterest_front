import React, { useState } from 'react';
import styled from 'styled-components';
import Template from '../components/Template';
import Header from '../components/Header';
import MenuToggle from '../components/MenuToggle';
import AddForm from '../components/AddForm';
import { Button } from '../elem';
import { useDispatch, useSelector } from 'react-redux';

const AddPin = ({ history }) => {
	const dispatch = useDispatch();

	return (
		<Template bg='var(--primary-lightgray)' pd='28px 0'>
			<LeftNav>
				<Button />
			</LeftNav>
			<Header history={history} />
			<Container>
				<AddForm />
			</Container>
		</Template>
	);
};

const Container = styled.section`
	background-color: #fff;
`;

const LeftNav = styled.nav`
	position: absolute;
	left: 0;
	top: 100px;
	background-color: #fff;
	border: 1px solid red;
	width: 100px;
`;
export default AddPin;

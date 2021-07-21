import React from 'react';
import styled from 'styled-components';
import Template from '../components/Template';
import AddForm from '../components/AddForm';
import { Icons } from '../elem';
import { useSelector } from 'react-redux';

const AddPin = ({ history }) => {
	const previewUrl = useSelector((store) => store.image.preview);

	return (
		<Template bg='var(--primary-lightgray)' pd='28px 0'>
			<LeftNav>
				<AddformBtn />
				<MiniView previewUrl={previewUrl}>
					{previewUrl ? '' : <Icons.Paint />}
				</MiniView>
			</LeftNav>
			<AddForm />
		</Template>
	);
};

const LeftNav = styled.nav`
	position: absolute;
	left: 10px;
	top: 100px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 16px;
`;

const MiniView = styled.div`
	background-image: url(${(props) => props.previewUrl});
	background-size: cover;
	background-position: center center;
	width: 40px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	background-color: #e2e2e2;
`;

const AddformBtn = styled.div`
	width: 40px;
	height: 60px;
	border-radius: 4px;
	background-color: #e2e2e2;
`;

export default AddPin;

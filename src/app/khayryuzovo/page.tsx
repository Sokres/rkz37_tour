import KhayryuzovoBox from '@/components/modules/Khayryuzovo/KhayryuzovoBox/KhayryuzovoBox';
import KhayryuzovoDay from '@/components/modules/Khayryuzovo/KhayryuzovoDay/KhayryuzovoDay';
import KhayryuzovoDopInfo from '@/components/modules/Khayryuzovo/KhayryuzovoDopInfo/KhayryuzovoDopInfo';
import KhayryuzovoInfo from '@/components/modules/Khayryuzovo/KhayryuzovoInfo/KhayryuzovoInfo';
import KhayryuzovoMain from '@/components/modules/Khayryuzovo/KhayryuzovoMain/KhayryuzovoMain';
import React from 'react';

const page = () => {
	return (
		<div>
			<KhayryuzovoMain />
			<KhayryuzovoInfo />
			<KhayryuzovoBox />
			<KhayryuzovoDay />
			<KhayryuzovoDopInfo />
		</div>
	);
};

export default page;

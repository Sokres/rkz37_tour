import KamchatkaBox from '@/components/modules/Kamchatka/KamchatkaBox/KamchatkaBox';
import KamchatkaDay from '@/components/modules/Kamchatka/KamchatkaDay/KamchatkaDay';
import KamchatkaDopInfo from '@/components/modules/Kamchatka/KamchatkaDopInfo/KamchatkaDopInfo';
import KamchatkaInfo from '@/components/modules/Kamchatka/KamchatkaInfo/KamchatkaInfo';

import KamchatkaMain from '@/components/modules/Kamchatka/KamchatkaMain/KamchatkaMain';
import React from 'react';

const page = () => {
	return (
		<div>
			<KamchatkaMain />
			<KamchatkaInfo />
			<KamchatkaBox />
			<KamchatkaDay />
			<KamchatkaDopInfo />
		</div>
	);
};

export default page;

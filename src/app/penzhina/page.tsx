import PenzhinaDay from '@/components/modules/Penzhina/PenzhinaDay/PenzhinaDay';
import PenzhinaDopInfo from '@/components/modules/Penzhina/PenzhinaDopInfo/PenzhinaDopInfo';
import PenzhinaInfo from '@/components/modules/Penzhina/PenzhinaInfo/PenzhinaInfo';
import PenzhinaMain from '@/components/modules/Penzhina/PenzhinaMain/PenzhinaMain';
import React from 'react';

const page = () => {
	return (
		<div>
			<PenzhinaMain />
			<PenzhinaInfo />
			<PenzhinaDay />
			<PenzhinaDopInfo />
		</div>
	);
};

export default page;

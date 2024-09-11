import KaraginslyBox from '@/components/modules/Karaginsly/KaraginslyBox/KaraginslyBox';
import KaraginslyDay from '@/components/modules/Karaginsly/KaraginslyDay/KaraginslyDay';
import KaraginslyDopInfo from '@/components/modules/Karaginsly/KaraginslyDopInfo/KaraginslyDopInfo';
import KaraginslyInfo from '@/components/modules/Karaginsly/KaraginslyInfo/KaraginslyInfo';
import KaraginslyMain from '@/components/modules/Karaginsly/KaraginslyMain/KaraginslyMain';
import React from 'react';

const page = () => {
	return (
		<div>
			<KaraginslyMain />
			<KaraginslyInfo />
			<KaraginslyBox />
			<KaraginslyDay />
			<KaraginslyDopInfo />
		</div>
	);
};

export default page;

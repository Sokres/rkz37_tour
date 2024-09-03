'use client';
import GallaryAbout from '@/components/modules/About/GallaryAbout/GallaryAbout';
import InfoAbout from '@/components/modules/About/InfoAbout/InfoAbout';
import MainAbout from '@/components/modules/About/MainAbout/MainAbout';
import React from 'react';

const Page = () => {
	return (
		<section>
			<MainAbout />
			<InfoAbout />
			<GallaryAbout />
		</section>
	);
};

export default Page;

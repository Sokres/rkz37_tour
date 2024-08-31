'use client';
import React from 'react';
import cl from './TourList.module.css';
import { useLang } from '@/hook/useLang';
import BoxRayuon from '../BoxRayuon/BoxRayuon';

const TourList = () => {
	const { lang, translations } = useLang();
	const listObject = translations[lang].listObject;

	return (
		<section className={`${cl.tour_list}, column`}>
			{Object.entries(listObject).map(([key, item], i) => (
				<BoxRayuon
					key={i}
					name={item.name}
					description={item.description}
					link={item.link}
					linkName={item.link_name}
					img={item.img.map((image) => ({ image }))}
				/>
			))}
		</section>
	);
};

export default TourList;

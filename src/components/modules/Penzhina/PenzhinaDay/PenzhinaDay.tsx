'use client';
import React from 'react';
import cl from './PenzhinaDay.module.css';
import { useLang } from '@/hook/useLang';

const PenzhinaDay = () => {
	const { lang, translations } = useLang();
	const daysList = translations[lang].tour1.itinerary.days;
	return (
		<section className={`${cl.penzhinaDay} column`}>
			<ul className={cl.penzhinaDay_list}>
				{daysList.map((day, index) => (
					<li key={index} className={cl.penzhinaDay_listItem}>
						<h3 className={cl.penzhinaDay_listItemTitle}>
							{day.day}
							<span> день</span>
						</h3>
						<p className={cl.penzhinaDay_listItemText}>{day.description}</p>
					</li>
				))}
			</ul>
		</section>
	);
};

export default PenzhinaDay;

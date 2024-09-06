'use client';
import { useLang } from '@/hook/useLang';
import React from 'react';
import cl from './KamchatkaMain.module.css';

const KamchatkaMain = () => {
	const { lang, translations } = useLang();
	return (
		<main className={`${cl.PenzhinaMain} column`}>
			<h1 className={cl.PenzhinaMain__title}>
				{translations[lang].tour4.title}
			</h1>
			<h3>{translations[lang].tour4.numer_tour} </h3>
		</main>
	);
};

export default KamchatkaMain;

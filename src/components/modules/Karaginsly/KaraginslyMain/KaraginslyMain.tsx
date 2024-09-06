'use client';
import { useLang } from '@/hook/useLang';
import React from 'react';
import cl from './KaraginslyMain.module.css';

const KaraginslyMain = () => {
	const { lang, translations } = useLang();
	return (
		<main className={`${cl.PenzhinaMain} column`}>
			<h1 className={cl.PenzhinaMain__title}>
				{translations[lang].tour2.title}
			</h1>
			<h3>{translations[lang].tour2.numer_tour} </h3>
		</main>
	);
};

export default KaraginslyMain;

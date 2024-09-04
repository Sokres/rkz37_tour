'use client';
import { useLang } from '@/hook/useLang';
import React from 'react';
import cl from './PenzhinaMain.module.css';

const PenzhinaMain = () => {
	const { lang, translations } = useLang();
	return (
		<main className={`${cl.PenzhinaMain} column`}>
			<h1 className={cl.PenzhinaMain__title}>
				{translations[lang].tour1.title}
			</h1>
			<h2 className={cl.PenzhinaMain__subtitle}>
				{translations[lang].tour1.title2}
			</h2>
		</main>
	);
};

export default PenzhinaMain;

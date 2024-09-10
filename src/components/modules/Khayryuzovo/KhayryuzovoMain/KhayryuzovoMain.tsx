'use client';
import { useLang } from '@/hook/useLang';
import React from 'react';
import cl from './KhayryuzovoMain.module.css';

const KhayryuzovoMain = () => {
	const { lang, translations } = useLang();
	return (
		<main className={`${cl.PenzhinaMain} column`}>
			<h1 className={cl.PenzhinaMain__title}>
				{translations[lang].tour3.title}
			</h1>
			<h3>{translations[lang].tour3.numer_tour} </h3>
		</main>
	);
};

export default KhayryuzovoMain;

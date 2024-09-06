'use client';
import { useLang } from '@/hook/useLang';
import React from 'react';
import cl from './KamchatkaInfo.module.css';
import Image from 'next/image';
const KamchatkaInfo = () => {
	const { lang, translations } = useLang();
	const highlights = translations[lang].tour4.highlights;
	return (
		<section className={`${cl.penzhinaInfo} column`}>
			<p className={cl.penzhinaInfo__description}>
				{translations[lang].tour4.description}
			</p>
			<div className={cl.penzhinaInfo__wrap}>
				<div className={cl.penzhinaInfo__highlight}>
					{highlights.map((highlight, index) => (
						<div key={index}>
							<h2 className={cl.penzhinaInfo__highlight_title}>
								{highlight.title}
							</h2>
							<p className={cl.penzhinaInfo__highlight_description}>
								{highlight.description}
							</p>
						</div>
					))}
				</div>
				<Image
					className={cl.penzhinaInfo__highlight_img}
					src={'./img/kam/kamchatka.svg'}
					width={200}
					height={500}
					alt="kamchatka"
				/>
			</div>
		</section>
	);
};

export default KamchatkaInfo;

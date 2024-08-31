'use client';
import { useLang } from '@/hook/useLang';
import Image from 'next/image';
import React from 'react';

const AboutHerow = () => {
	const { lang, translations } = useLang();
	return (
		<section className="about-hero column">
			<div className="about-hero__container">
				<p className="about-hero__text">
					<span> {translations[lang].main_about.sentence_1}</span>
					<span> {translations[lang].main_about.sentence_1_1}</span>
					<span> {translations[lang].main_about.sentence_1_2}</span>
				</p>
				<p className="about-hero__text">
					{translations[lang].main_about.sentence_2}
				</p>
			</div>
			<Image
				className="about__img"
				src="/kamchatka.svg"
				alt="Карта камчатки"
				width={700}
				height={900}
			/>
		</section>
	);
};

export default AboutHerow;

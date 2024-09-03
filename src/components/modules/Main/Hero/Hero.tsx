'use client';
import { useLang } from '@/hook/useLang';
import Link from 'next/link';

import { useEffect, useState, ReactNode } from 'react';

const Hero = ({ children }: { children: ReactNode }) => {
	const { lang, translations } = useLang();
	const [videoReady, setVideoReady] = useState(false);

	useEffect(() => {
		// Если вы будете использовать видео или что-то другое, зависящее от браузера
		setVideoReady(true);
	}, []);

	return (
		<main className="main">
			{children}
			<section className="video-bg">
				{videoReady && (
					<video width="320" height="240" autoPlay muted loop>
						<source src="/video/0828.mp4" type="video/mp4" />
					</video>
				)}
				<div className="video-bg__content column">
					<h1 className="main_title">{translations[lang].main.kamchatka}</h1>
					<p className="main_discription">
						{translations[lang].main.extreme_fishing}
					</p>
					<Link className="main__btn" href="#tour">
						{translations[lang].main.btn_to_tours}
					</Link>
				</div>
			</section>
		</main>
	);
};

export default Hero;

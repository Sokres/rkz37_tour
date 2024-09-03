import { useLang } from '@/hook/useLang';
import React from 'react';
import cl from './InfoAbout.module.css';
import Link from 'next/link';
import Image from 'next/image';

const InfoAbout = () => {
	const { lang, translations } = useLang();
	return (
		<section className={`${cl.infoAbout} column`}>
			<div className={cl.infoAbout__wraper}>
				<h2 className={cl.infoAbout__title}>
					{translations[lang].companyDescription.about_title}
				</h2>
				<p className={cl.infoAbout__text}>
					{translations[lang].companyDescription.about}
				</p>
			</div>
			<ul className={cl.infoAbout__list}>
				{Object.entries(translations[lang].companyDescription.benefits).map(
					([key, value], i) => (
						<li key={i} className={cl.infoAbout__item}>
							{Object.entries(value).map(([key, value1], i) => (
								<div key={i} className={cl.infoAbout__wrap}>
									{key.includes('title') && <h2>{value1}</h2>}
									{key.includes('description') && <p>{value1}</p>}
									{key.includes('img') && (
										<>
											{' '}
											<Image
												src={value1}
												width={200}
												height={100}
												alt={'Фото'}
											/>
											{''}
										</>
									)}
								</div>
							))}
						</li>
					)
				)}
			</ul>
		</section>
	);
};

export default InfoAbout;

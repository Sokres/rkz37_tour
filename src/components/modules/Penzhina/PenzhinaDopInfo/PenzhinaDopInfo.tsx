'use client';
import { useLang } from '@/hook/useLang';
import Image from 'next/image';
import React from 'react';
import { EffectCards, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cl from './PenzhinaDopInfo.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
const PenzhinaDopInfo = () => {
	const { lang, translations } = useLang();
	const imeges = translations[lang].listObject.Penzhina.img;
	const targetAudience = translations[lang].tour1.target_audience.list;
	const packing = translations[lang].tour1.packing.list;
	const tourIncludes = translations[lang].tour1.tour_includes.list;
	return (
		<div className={cl.container}>
			<div className={`${cl.box_info}  box_rayon`}>
				<Swiper
					effect={'cards'}
					grabCursor={true}
					navigation={true}
					modules={[Navigation, EffectCards]}
					className={`${cl.box_info__slider}`}
				>
					{imeges.map((image, index) => (
						<SwiperSlide key={index}>
							<Image
								className={cl.box_info__img}
								src={image}
								alt={'sdsd'}
								width={400}
								height={400}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default PenzhinaDopInfo;

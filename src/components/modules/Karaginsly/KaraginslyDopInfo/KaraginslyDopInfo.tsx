'use client';
import { useLang } from '@/hook/useLang';
import Image from 'next/image';
import React from 'react';
import { EffectCards, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import cl from './KaraginslyDopInfo.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
const KaraginslyDopInfo = () => {
	const { lang, translations } = useLang();
	const imeges = translations[lang].listObject.Karaginsky.img;
	const targetAudience = translations[lang].tour2.target_audience;
	const packing = translations[lang].tour2.packing;
	const tourIncludes = translations[lang].tour2.tour_includes;
	return (
		<div className={`${cl.container} column`}>
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
			<div className={cl['box_info__list_items']}>
				<div className={cl['box_info__wrap']}>
					<div className={cl['box_info__box']}>
						<Image
							src={'/img/icon/stall.svg'}
							width={40}
							height={40}
							alt="icon"
						/>
						<h3 className={cl['box_info__title']}>{targetAudience.title}</h3>
					</div>
					<ul className={cl['box_info__list']}>
						{targetAudience.list.map((item, i) => (
							<li key={i} className={cl['box_info__item']}>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className={cl['box_info__wrap']}>
					<div className={cl['box_info__box']}>
						<Image
							src={'/img/icon/rod.svg'}
							width={40}
							height={40}
							alt="icon"
						/>
						<h3 className={cl['box_info__title']}>{tourIncludes.title}</h3>
					</div>
					<ul className={cl['box_info__list']}>
						{tourIncludes.list.map((item, i) => (
							<li key={i} className={cl['box_info__item']}>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className={cl['box_info__wrap']}>
					<div className={cl['box_info__box']}>
						<Image
							src={'/img/icon/backpack.svg'}
							width={40}
							height={40}
							alt="icon"
						/>
						<h3 className={cl['box_info__title']}>{packing.title}</h3>
					</div>
					<ul className={cl['box_info__list']}>
						{packing.list.map((item, i) => (
							<li key={i} className={cl['box_info__item']}>
								{item}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default KaraginslyDopInfo;

'use client';

import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
import { Navigation, EffectCards } from 'swiper/modules';
import Image from 'next/image';
import cl from './BoxRayuon.module.css';
interface ImageBoxRayonProps {
	image: string;
}
interface BoxRayonProps {
	name: string;
	description: string;
	link: string;
	linkName: string;
	img: ImageBoxRayonProps[];
}
const BoxRayuon = ({
	name,
	description,
	link,
	linkName,
	img,
}: BoxRayonProps) => {
	return (
		<div className={`${cl.box_rayon}  box_rayon`}>
			<Swiper
				effect={'cards'}
				grabCursor={true}
				navigation={true}
				modules={[Navigation, EffectCards]}
				className={`${cl.box_rayon__slider}`}
			>
				{img.map((imageObj, index) => (
					<SwiperSlide key={index}>
						<Image
							className={cl.box_rayon__img}
							src={imageObj.image}
							alt={name}
							width={400}
							height={400}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<h2 className={cl.box_rayon__title}>{name}</h2>
			<p className={cl.box_rayon__text}>{description}</p>

			<Link className={cl.box_rayon__link} href={link}>
				{linkName}
			</Link>
		</div>
	);
};

export default BoxRayuon;

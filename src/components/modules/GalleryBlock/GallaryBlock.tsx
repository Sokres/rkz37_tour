'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import cl from './GalleryBlock.module.css';
import { useMediaQuery } from '@/hook/useMedia';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

type ImageData = {
	img: string;
	i: number;
};

const GalleryBlock = () => {
	const images = [
		'/img/gallery/gallary-1.jpg',
		'/img/gallery/gallary-2.jpg',
		'/img/gallery/gallary-3.jpg',
		'/img/gallery/gallary-4.jpg',
		'/img/gallery/gallary-5.jpg',
		'/img/gallery/gallary-6.jpg',
		'/img/gallery/gallary-7.jpg',
		'/img/gallery/gallary-8.jpg',
		'/img/gallery/gallary-9.jpg',
		'/img/gallery/gallary-11.jpg',
		'/img/gallery/gallary-12.jpg',
	];
	const [imgReady, setImgReady] = useState(false);
	const media1024 = useMediaQuery(1024);
	useEffect(() => {
		setImgReady(true);
	}, []);
	const progressCircle = useRef<SVGSVGElement>(null);
	const progressContent = useRef<HTMLInputElement>(null);
	const onAutoplayTimeLeft = (
		swiper: typeof Swiper.prototype,
		timeLeft: number,
		percentage: number
	) => {
		if (progressCircle.current) {
			progressCircle.current.style.setProperty(
				'--progress',
				(1 - percentage).toString()
			);
		}

		if (progressContent.current) {
			progressContent.current.textContent = `${Math.ceil(timeLeft / 1000)}s`;
		}
	};
	return (
		<section className={cl.gallery_block}>
			<h3 className={cl.gallery_block__title}>Неизведанные места Камчатки</h3>

			{imgReady && !media1024 ? (
				<ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
					<Masonry gutter="20px">
						{images.map((image, i) => (
							<Image
								key={i}
								src={image}
								alt={'asdasd'} // Consistent alt text
								width={800}
								height={600}
								sizes="(max-width: 600px) 100vw, 50vw"
								style={{ width: '100%', height: 'auto' }}
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			) : (
				<>
					<Swiper
						dir="rtl"
						centeredSlides={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						onAutoplayTimeLeft={onAutoplayTimeLeft}
						className={cl.mySwiper}
					>
						{images.map((image, i) => (
							<SwiperSlide className={cl.slide} key={i}>
								<Image
									className={cl.image}
									src={image}
									alt={'asdasd'}
									width={800}
									height={600}
								/>
							</SwiperSlide>
						))}
						<div className={cl.autoplay_progress} slot="container-end">
							<svg viewBox="0 0 48 48" ref={progressCircle}>
								<circle cx="24" cy="24" r="20"></circle>
							</svg>
							<span ref={progressContent}></span>
						</div>
					</Swiper>
				</>
			)}
		</section>
	);
};

export default GalleryBlock;

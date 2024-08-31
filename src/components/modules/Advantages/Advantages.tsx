'use client';
import React from 'react';
import cl from './Advaneges.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Parallax, Navigation } from 'swiper/modules';
import { useLang } from '@/hook/useLang';
import Image from 'next/image';
const Advantages = () => {
	const { lang, translations } = useLang();
	const dataAdvantages = translations[lang].advantages.items;

	return (
		<section className={cl.advantag}>
			<h2 className={cl.advantag__header}>
				{translations[lang].advantages.title}
			</h2>
			<Swiper
				speed={600}
				parallax={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Parallax, Navigation]}
				className="mySwiper advantag-slider"
			>
				<div
					slot="container-start"
					className={cl.parallax_bg}
					data-swiper-parallax="-23%"
				></div>
				<h2 className={cl.advantag__header}>
					{translations[lang].advantages.title}
				</h2>
				{Object.entries(dataAdvantages).map(([key, item], i) => (
					<SwiperSlide key={i}>
						<div className={`${cl.advantag_slid} column`}>
							<div className={cl.advantag__wrap} data-swiper-parallax="-300">
								<h3 className={cl.advantag__title}>{item.subTitle}</h3>

								<div className={cl.advantag__text}>
									<p>{item.text}</p>
								</div>
							</div>

							<Image
								className={cl.advantag__imge}
								src={item.image}
								alt={item.subTitle}
								width={700}
								height={700}
								data-swiper-parallax="-100"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Advantages;

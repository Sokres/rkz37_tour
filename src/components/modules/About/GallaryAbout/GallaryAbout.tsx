import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';
import cl from './GallaryAbout.module.css';
const image = [
	'/img/about/images/image-1.jpg',
	'/img/about/images/image-10.jpg',
	'/img/about/images/image-3.jpg',
	'/img/about/images/image-4.jpg',
	'/img/about/images/image-5.jpg',
	'/img/about/images/image-6.jpg',
	'/img/about/images/image-11.jpg',

	'/img/about/images/image-8.jpg',
	'/img/about/images/image-9.jpg',
	'/img/about/images/image-2.jpg',
	'/img/about/images/image-7.jpg',
];
const GallaryAbout = () => {
	return (
		<PhotoProvider>
			<div className={`${cl.about_wraper} column`}>
				{image.map((item, index) => (
					<PhotoView key={index} src={item}>
						<Image
							className={cl.about_image}
							src={item}
							width={300}
							height={200}
							alt="вава"
						/>
					</PhotoView>
				))}
			</div>
		</PhotoProvider>
	);
};

export default GallaryAbout;

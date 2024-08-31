'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import cl from './GalleryBlock.module.css';

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
	];
	const [imgReady, setImgReady] = useState(false);

	useEffect(() => {
		// Если вы будете использовать видео или что-то другое, зависящее от браузера
		setImgReady(true);
	}, []);
	return (
		<section className={cl.gallery_block}>
			<h3 className={cl.gallery_block__title}>Неизведанные места Камчатки</h3>

			{imgReady && (
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
								style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
							/>
						))}
					</Masonry>
				</ResponsiveMasonry>
			)}
		</section>
	);
};

export default GalleryBlock;

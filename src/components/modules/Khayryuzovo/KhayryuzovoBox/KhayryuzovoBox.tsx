'use client';
import { useLang } from '@/hook/useLang';
import Image from 'next/image';
import React from 'react';

import cl from './KhayryuzovoBox.module.css';

const KhayryuzovoBox = () => {
	const { lang, translations } = useLang();
	const targetAudience = translations[lang].tour3.time_info;
	const tourIncludes = translations[lang].length_tor;
	return (
		<div className={`${cl.container} column`}>
			<div className={cl['box_info__list_items']}>
				<div className={cl['box_info__wrap']}>
					<div className={cl['box_info__box']}>
						<Image
							src={'/img/icon/tourist.svg'}
							width={40}
							height={40}
							alt="icon"
						/>
						<div className={cl['box_info__title']}>{targetAudience}</div>
					</div>
				</div>
				<div className={cl['box_info__wrap']}>
					<div className={cl['box_info__box']}>
						<Image
							src={'/img/icon/exclamative.svg'}
							width={40}
							height={40}
							alt="icon"
						/>
						<div className={cl['box_info__title']}>{tourIncludes}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default KhayryuzovoBox;

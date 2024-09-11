'use client';
import React from 'react';
import cl from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/hook/useLang';
import { useUnit } from 'effector-react';
import { $frameIsOpen, closeFrame, openFrame } from '@/context/modal';
const Footer = () => {
	const { lang, translations } = useLang();
	const open = () => {
		closeFrame();
	};
	return (
		<footer className={`${cl.footer} column`}>
			<Image src="/logo.svg" width={200} height={100} alt="logo" />
			{/* <div className={cl.footer__container}>
				<h3 className={cl.footer__title}>{translations[lang].footer.qest} </h3>
				<Link
					href={`tel:${translations[lang].menu_link.phone}`}
					className={cl.footer__phone}
				>
					{translations[lang].menu_link.phone}
				</Link>

				<button className={cl.footer__o} onClick={open}>
					{translations[lang].menu_link.submit_request}
				</button>
			</div> */}
			<div className={cl.footer__container}>
				<p className={cl.footer__info}>© 2024 RKZ 37</p>
				<p className={cl.footer__info}>{translations[lang].footer.pr}</p>
				<p className={cl.footer__info}>{translations[lang].footer.conf}</p>
				<p className={cl.footer__info}>{translations[lang].footer.use}</p>
			</div>
		</footer>
	);
};

export default Footer;

'use client';
import React from 'react';
import cl from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/hook/useLang';
const Footer = () => {
	// const year = new Date().getFullYear();
	const { lang, translations } = useLang();
	return (
		<footer className={`${cl.footer} column`}>
			<Image src="/logo.svg" width={200} height={100} alt="logo" />
			<div className={cl.footer__container}>
				<h3 className={cl.footer__title}>{translations[lang].footer.qest} </h3>
				<p className={cl.footer__title}>{translations[lang].menu_link.phone}</p>
				<Link className={cl.footer__o} href="/">
					{translations[lang].menu_link.submit_request}
				</Link>
			</div>
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

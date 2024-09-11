'use client';
import React, { useEffect } from 'react';
import cl from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/hook/useLang';
import { $frameIsOpen, closeFrame, openFrame } from '@/context/modal';
const Footer = () => {
	const { lang, translations } = useLang();
	const open = () => {
		closeFrame();
	};
	useEffect(() => {
		const translate = translations[lang];
	}, [lang, translations]);
	return (
		<footer className={`${cl.footer} column`}>
			<Image src="/logo.svg" width={200} height={100} alt="logo" />
			<div className={cl.footer__container}>
				<h3 className={cl.footer__title}>{translations[lang].footer.qest} </h3>
				<Link
					href={`tel:${translations[lang].menu_link.phone}`}
					className="header__info_link"
				>
					{translations[lang].menu_link.phone}
				</Link>
				<Link
					className="header__info_link"
					rel="stylesheet"
					href="mailto:rkz37discovery@gmail.com"
				>
					rkz37discovery@gmail.com
				</Link>
				<button className={cl.footer__o} onClick={open}>
					{translations[lang].menu_link.submit_request}
				</button>
			</div>
			<div className={cl.footer__container}>
				<p className={cl.footer__info}>© 2024 RKZ 37</p>
				<Link href={'/politic'} className={cl.footer__info}>
					{translations[lang].footer.conf}
				</Link>
				<Link href={'/userAgreement'} className={cl.footer__info}>
					{translations[lang].footer.use}
				</Link>
			</div>
		</footer>
	);
};

export default Footer;

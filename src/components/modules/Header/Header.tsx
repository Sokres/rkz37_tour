'use client';
import { AllowedLengs } from '@/constants/lang';
import { setLeng } from '@/context/lang';
import { $menuIsOpen, closeMenu, openMenu } from '@/context/modal';
import { useLang } from '@/hook/useLang';
import { useMediaQuery } from '@/hook/useMedia';
import {
	addOverflowHiddenToBody,
	removeOverflowHiddenFromBody,
} from '@/lib/utils/common';
import { useUnit } from 'effector-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
	const { lang, translations } = useLang();

	const menuIsOpen = useUnit($menuIsOpen);
	const isMedia1024 = useMediaQuery(1024);
	const headlerOpenMenu = () => {
		if (!menuIsOpen) {
			addOverflowHiddenToBody();
			openMenu();
		} else {
			removeOverflowHiddenFromBody();
			closeMenu();
		}
	};
	const henSwitchLang = (lang: string) => {
		setLeng(lang as AllowedLengs);
		localStorage.setItem('lang', JSON.stringify(lang));
	};
	const henSwitchLangRu = () => henSwitchLang('ru');
	const henSwitchLangEn = () => henSwitchLang('en');
	const henSwitchLangCh = () => henSwitchLang('ch');

	return (
		<header className="header column">
			<Link href="/">
				<Image
					className="header__logo"
					src={`${isMedia1024 ? '/logo-mobile.svg' : '/logo.svg'}`}
					width={160}
					height={60}
					alt="logo"
				/>
			</Link>

			<nav
				className={`header__nav  ${
					!menuIsOpen ? 'header__nav--open' : 'header__nav--close'
				} `}
			>
				<ul className="menu">
					{Object.entries(translations[lang].menu).map(([key, value]) => (
						<li className="header__nav-link-item" key={key}>
							<Link href={`/${key}`} className="header__nav-link">
								{value}
							</Link>
						</li>
					))}
				</ul>
				<div className="header_lang">
					<button
						onClick={henSwitchLangRu}
						className={`header__lang_btn ${
							lang == 'ru' ? 'header__lang_btn_active' : ''
						}`}
					>
						RU
					</button>
					<button
						onClick={henSwitchLangEn}
						className={`header__lang_btn ${
							lang == 'en' ? 'header__lang_btn_active' : ''
						}`}
					>
						EN
					</button>
					<button
						onClick={henSwitchLangCh}
						className={`header__lang_btn ${
							lang == 'ch' ? 'header__lang_btn_active' : ''
						}`}
					>
						CN
					</button>
				</div>
			</nav>
			<div className="header__info">
				<Link
					className="header__info_link"
					rel="stylesheet"
					href={`tel:${translations[lang].menu_link.phone}`}
				>
					{translations[lang].menu_link.phone}
				</Link>
				<button className={`header__info_btn `}>
					{translations[lang].menu_link.submit_request}
				</button>
			</div>
			<button
				onClick={headlerOpenMenu}
				className={` header__btn_menu  ${
					!menuIsOpen ? 'header__btn_menu--open' : 'header__btn_menu--close'
				} `}
			>
				<span className="header__btn_menu_close"></span>
				<Image
					className="header__btn_menu--svg"
					src="/menu.svg"
					alt="button"
					width={30}
					height={30}
				/>
			</button>
		</header>
	);
};

export default Header;

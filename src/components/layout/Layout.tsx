'use client';
import { ReactNode } from 'react';
import Header from '../modules/Header/Header';
import Hero from '../modules/Main/Hero/Hero';

import GallaryBlock from '../modules/GalleryBlock/GallaryBlock';
import Footer from '../modules/Footer/Footer';
import { usePathname } from 'next/navigation';

const Layout = ({ children }: { children: ReactNode }) => {
	const pathname = usePathname();
	const isHomePage = pathname === '/';

	return (
		<>
			{isHomePage ? (
				<Hero>
					<Header />
				</Hero>
			) : (
				<Header />
			)}
			{children}
			<Footer />
		</>
	);
};

export default Layout;

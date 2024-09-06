import type { Metadata } from 'next';
import './globals.css';
import Layout from '@/components/layout/Layout';

export const metadata: Metadata = {
	title: 'Kam fishing discovery',
	description: 'РКЗ 37 -  экстримальные виды рыблки на Камчатке',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}

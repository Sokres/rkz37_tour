import React from 'react';
import cl from './MainAbout.module.css';

const MainAbout = () => {
	return (
		<main className={`${cl.main_abiut} column`}>
			<h1 className={cl.main_abiut__header}>О нас</h1>
		</main>
	);
};

export default MainAbout;

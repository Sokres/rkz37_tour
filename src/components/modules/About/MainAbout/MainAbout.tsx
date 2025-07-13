import React from "react";
import cl from "./MainAbout.module.css";
import Link from "next/link";

const MainAbout = () => {
  return (
    <main className={`${cl.main_abiut} column`}>
      <h1 className={cl.main_abiut__header}>О нас</h1>
      <Link className={cl.main_link} href="/doc/SIG_STAMP.pdf">
        Скачать выписку из единого федерального реестра под номером
        В031-00161-77/01818651
      </Link>
    </main>
  );
};

export default MainAbout;

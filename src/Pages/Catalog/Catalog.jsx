import React from "react";
import Logo from "../../Components/Header/Logo/Logo";
import Menu from "../../Components/Header/Menu/Menu";
import Footer from "../../Components/Footer/Footer";
import styles from './Catalog.module.scss';
import Title from "./Title/Title";
import CardsCatalog from "./CardsCatalog/CardsCatalog";

const Catalog = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Logo />
        <Menu />
      </div>
      <Title />
      <CardsCatalog/>
      <Footer />
    </div>
  );
};

export default Catalog;

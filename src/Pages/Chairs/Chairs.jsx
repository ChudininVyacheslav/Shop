import React from "react";
import Cards from "./Cards/Cards";
import styles from "./Chairs.module.scss";
import Logo from "../../Components/Header/Logo/Logo";
import Title from "../Catalog/Title/Title";
import Footer from "../../Components/Footer/Footer";
import Menu from "../../Components/Header/Menu/Menu";

const Chairs = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Logo />
        <Menu />
      </div>
      <Title />
      <Cards />
      <Footer />
    </div>
  );
};

export default Chairs;

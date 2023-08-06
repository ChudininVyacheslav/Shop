import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footer}>Все права защищены &copy;</footer>
    </div>
  );
};

export default Footer;

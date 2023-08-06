import React from "react";
import styles from "./Header.module.scss";
import Logo from './Logo/Logo';
import Menu from './Menu/Menu';

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div>
        <Logo />

        <Menu />
      </div>
    </header>
  );
};

export default Header;

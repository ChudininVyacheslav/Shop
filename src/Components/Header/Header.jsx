import React from "react";
import styles from "./Header.module.scss";
import {mainMenu, catalogMenu} from "./menu";

const Header = () => {
  return (
    <header>
      <div>
        <span className={styles.logo}>House Staff</span>
        <ul className={styles.nav}>
          {mainMenu.map((elem) => {
            if (elem === "Каталог") {
              return (
                <li id={styles.Каталог} className={styles.nav__item}>
                  <a className={styles.nav__link} href="#">{elem}</a>
                  <ul className={styles.mebel}>
                    {catalogMenu.map((elem) => {
                      return (
                        <li id={elem} className={styles.mebel__item}>
                          <a className={styles.nav__link} href="#">{elem}</a>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }

            return (
              <li id={elem} className={styles.nav__item}>
                <a className={styles.nav__link} href="#">{elem}</a>
              </li>
            );
          })}
        </ul>
        {/* <ul className={styles.mebel}>
          {catalogMenu.map((elem) => {
            return (
              <li id={elem} className={styles.nav__item}>
                {elem}
              </li>
            );
          })}
        </ul> */}
      </div>
      <div className={styles.presentation}></div>
    </header>
  );
};

export default Header;

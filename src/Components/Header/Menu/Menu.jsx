import React from "react";
import styles from "./Menu.module.scss";
import {Link} from "react-router-dom";
import {catalogMenu, mainMenu} from "./menuData";

const Menu = () => {
  return (
    <ul className={styles.nav}>
      {mainMenu.map((elem) => {
        if (elem.name === "Каталог") {
          return (
            <li key={elem.name} id={styles.catalog} className={styles.nav__item}>
              <Link className={styles.nav__link} to={elem.path}>
                {elem.name}
              </Link>
              <ul className={styles.mebel}>
                {catalogMenu.map((elem) => {
                  return (
                    <li key={elem.name} className={styles.mebel__item}>
                      <Link className={styles.nav__link} to={elem.path}>
                        {elem.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        }

        return (
          <li key={elem.name} className={styles.nav__item}>
            <Link className={styles.nav__link} to={elem.path}>
              {elem.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;

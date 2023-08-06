import React from "react";
import styles from "./Cards.module.scss";
import {listOfProducts} from "../listOfProducts";
import like from "../../../assets/like.svg";

const Cards = () => {
  return (
    <div className={styles.wrapper}>
      {listOfProducts.map((elem) => {
        return (
          <div id={elem.name} className={styles.card}>
            <div className={styles.card__wrapper}>
              <img
                className={styles.card__img}
                src={elem.img}
                alt={elem.name}
              ></img>
              <div className={styles.card__title}>{elem.name}</div>
              <div className={styles.card__available}>{elem.available}</div>
              <div className={styles.card__price}>
                <div>{elem.discountPrice}</div>
                <div className={styles.card__withoutDiscountPrice}>
                  {elem.withoutDiscountPrice}
                </div>
              </div>
              <div className={styles.card__percentageDiscount}>
                {elem.percentageDiscount}
              </div>
              <div className={styles.card__wrap}>
                <button className={styles.card__btn}>В корзину</button>
                <img className={styles.card__like} src={like} alt="like"></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

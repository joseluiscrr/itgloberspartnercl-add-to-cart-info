import React from "react";
import styles from "./styles.css";

const ButtonGroup = () => {
  return (
    <div className={`${styles.button__container}`}>
      <a href="/checkout" className={`${styles.checkout}`}>Comprar ahora</a>
      <a href="/" className={`${styles.continue}`}>Continuar comprando</a>
      <a href="/cart" className={`${styles.cart}`}>Ver carrito</a>
    </div>
  );
};

export default ButtonGroup;

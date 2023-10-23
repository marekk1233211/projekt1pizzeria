import styles from "./Header.module.scss";
import React, { useState, useEffect, useContext } from "react";
import CartExpand from "../CartExpand/CartExpand";
import { AppContext } from "../../AppContext";
const Header = () => {
  const {
    totalPrice,
    orderQuantity,
    itemName,
    itemPrice,
    itemQuantity,
    addToCartClicked,
    removeItemFromHeader,
  } = useContext(AppContext);

  const [show, setShow] = useState(false);
  const [idCartExpand, setIdCartExpand] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const showHideExpandedCart = () => {
    setShow((current) => !current);
  };

  const renderCartExpands = () => {
    return cartItems.slice(2).map((item) => (
      <div key={item.idCartExpand}>
        <CartExpand
          idCartExpand={item.idCartExpand}
          itemName={item.itemName}
          itemPrice={item.itemPrice}
          itemQuantity={item.itemQuantity}
          removeItemFromHeader={removeItemFromHeaderHandler}
        />
      </div>
    ));
  };
  const removeItemFromHeaderHandler = (event, idCartExpand) => {
    removeItemFromHeader(
      cartItems.find((item) => item.idCartExpand === idCartExpand)
    );
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.idCartExpand !== idCartExpand)
    );
  };
  useEffect(() => {
    setIdCartExpand((prev) => prev + 1);
    const newCartItem = {
      idCartExpand: idCartExpand,
      itemName: itemName,
      itemPrice: itemPrice,
      itemQuantity: itemQuantity,
    };
    setCartItems((prevItems) => [...prevItems, newCartItem]);
  }, [itemName, itemPrice, itemQuantity, addToCartClicked]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__wrapper}>
          <div className={styles.logo}>
            <h1 className={styles.logo__title}>
              <span>Mamma</span>Mia!
            </h1>
            <h2 className={styles.logo__subtitle}>
              the best homemade italian food
            </h2>
          </div>
          <div className={styles.cart}>
            <div className={styles.cart__summary}>
              <span className={styles.cart__total_number}>{orderQuantity}</span>
              <span className={styles.cart__total_price}>
                Total price: <strong>${totalPrice}</strong>
              </span>
              <i
                className="fa fa-chevron-down"
                onClick={showHideExpandedCart}
              ></i>
              <i
                className={"fa fa-shopping-cart" + " " + styles.cart__icon}
              ></i>
            </div>
            {show == true ? renderCartExpands() : <div></div>}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

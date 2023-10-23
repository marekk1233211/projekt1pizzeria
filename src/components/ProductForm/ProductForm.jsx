import styles from "./ProductForm.module.scss";
import ListOfItems from "../ListOfItems/ListOfItems";
import { useState } from "react";
import React, { useContext } from "react";
import { AppContext } from "../../AppContext";

const ProductForm = (props) => {
  const [selectQuantity, setSelectQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [auxVar, setAuxVar] = useState(false);

  const { addTotalCashFromCartToHeader } = useContext(AppContext);
  const { getItemInfo } = useContext(AppContext);
  const { auxFunToAddComponent } = useContext(AppContext);

  const addCashToTotalPrice = (checkedIngredient) => {
    if (checkedIngredient == false) {
      setTotalPrice((prevValue) => prevValue + parseInt(props.productCost));
    } else {
      setTotalPrice((prevValue) => prevValue - parseInt(props.productCost));
    }
  };
  const addCashToTotalPrice2 = (checkedIngredient) => {
    if (checkedIngredient == false) {
      setTotalPrice((prevValue) => prevValue + parseInt(props.productCost2));
    } else {
      setTotalPrice((prevValue) => prevValue - parseInt(props.productCost2));
    }
  };
  const addToCartFun = (e) => {
    setAuxVar((prev) => !prev);
    auxFunToAddComponent(auxVar);
    addTotalCashFromCartToHeader(
      totalPrice * selectQuantity + props.baseCost * selectQuantity
    );
    getItemInfo(
      props.productName,
      parseInt(totalPrice) + parseInt(props.baseCost),
      selectQuantity
    );
    e.preventDefault();
  };

  const faMinusFun = () => {
    if (selectQuantity > 0) {
      setSelectQuantity((prevValue) => prevValue - 1);
    } else {
      setSelectQuantity(0);
    }
  };
  const faPlusFun = () => {
    if (selectQuantity <= 9) {
      setSelectQuantity(selectQuantity + 1);
    }
  };
  // to disable warnings in console log
  const inputSelectQuantityHandler = () => {
    console.log("ok");
  };
  return (
    <form className={styles.product__order} onSubmit={addToCartFun}>
      <ListOfItems
        id={props.id}
        titleForm1={props.titleForm1}
        titleForm2={props.titleForm2}
        productCost2={props.productCost2}
        addCashToTotalPrice={addCashToTotalPrice}
        addCashToTotalPrice2={addCashToTotalPrice2}
        testProps={true}
        showImg={props.showImg}
      />

      {/* widget */}
      <div className={styles.amount}>
        <div className={styles.widget_amount}>
          <h3 className={styles.product__params_title}>Select quantity</h3>
          <a className="btn-quantity" href="#less">
            <i className="fa fa-minus" onClick={faMinusFun}></i>
          </a>
          <input
            type="text"
            name="amount"
            value={selectQuantity}
            onChange={inputSelectQuantityHandler} // to jest tylko po to aby nie było warningów
            id={props.id}
            className={styles.selectQuantity}
          />
          <a className="btn-quantity" href="#more">
            <i className="fa fa-plus" onClick={faPlusFun}></i>
          </a>
        </div>
        <p className={styles.product__total_price}>
          Total:{" "}
          {totalPrice * selectQuantity +
            parseInt(props.baseCost) * selectQuantity}{" "}
          $
        </p>
        <div>
          <button className="btn-primary" href="#add-to-cart">
            Add to cart
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;

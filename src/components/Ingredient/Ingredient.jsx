import styles from "./Ingredient.module.scss";
import { useState, useContext } from "react";
import ProductListContext from "../ProductList/ProductListContext";

const Ingredient = (props) => {
  let [checked, setChecked] = useState(false);

  const executeTwoFun = () => {
    if (!checked) {
      props.showImg(true, props.ingredient, props.id);
    } else {
      props.showImg(false, props.ingredient, props.id);
    }
    const toggle = (value) => {
      return !value;
    };
    setChecked(toggle);

    if (props.testProps === true) {
      props.addCashToTotalPrice(checked);
    } else {
      props.addCashToTotalPrice2(checked);
    }
  };
  return (
    <ProductListContext.Consumer>
      {(context) => (
        <div className={styles.checkbox + " " + styles.checkbox__round}>
          <label htmlFor={props.id}>
            {props.ingredient}
            <input
              type="checkbox"
              name={props.ingredient}
              value={props.ingredient}
              id={props.id}
              checked={checked}
              onChange={() => executeTwoFun()}
            />
            {props.titleForm == "Sauce" ? (
              <span>{context.productCost}</span>
            ) : props.titleForm == "Toppings" ? (
              <span>{context.productCost2}</span>
            ) : props.titleForm == "Ingredients" ? (
              <span>{context.productCost2}</span>
            ) : props.titleForm == "Coffe type" ? (
              <span>{context.productCost2}</span>
            ) : (
              <span></span>
            )}
            <span>$</span>
          </label>
        </div>
      )}
    </ProductListContext.Consumer>
  );
};

export default Ingredient;

import styles from "./CartExpand.module.scss";
import { useState } from "react";

const CartExpand = (props) => {
  const [auxVarToggle, setAuxVarToggle] = useState(false);
  const removeItemFromHeaderHandler = (idCartExpand) => {
    setAuxVarToggle((prev) => !prev);
    console.log("proba");
    props.removeItemFromHeader(auxVarToggle, idCartExpand);
  };
  return (
    <div className={styles.cart__summary_expanded}>
      <p>
        <ul>
          <li>
            {props.itemName + " x" + props.itemQuantity + " "}
            <span className={styles.cart__total_price}>
              <strong>price: ${props.itemPrice * props.itemQuantity}</strong>
            </span>
            <span>
              {" "}
              <i
                className="fa-sharp fa-solid fa-delete-left"
                onClick={() => removeItemFromHeaderHandler(props.idCartExpand)}
              ></i>
            </span>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default CartExpand;

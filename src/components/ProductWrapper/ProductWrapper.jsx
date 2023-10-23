import styles from "./ProductWrapper.module.scss";
import ProductForm from "../ProductForm/ProductForm";
import ProductImages from "../ProductImages/ProductImages";
import { useState } from "react";
import ProductListContext from "../ProductList/ProductListContext";

const ProductWrapper = (props) => {
  let [showImgIfChecked, setShowImgIfChecked] = useState(true);
  let [showIngredient, setShowIngredient] = useState("");
  let [showTypeFood, setShowTypeFood] = useState("");
  const [isShown, setIsShown] = useState(false);

  const showImg = (checked, ingredient, type) => {
    let result = false;
    result = checked;
    if (checked) {
      // console.log(checked, String(ingredient));
      setShowImgIfChecked(checked);
      setShowIngredient(ingredient);
      setShowTypeFood(type);
    } else if (checked == false) {
      // console.log(checked, ingredient);
      setShowImgIfChecked(checked);
      setShowIngredient(ingredient);
      setShowTypeFood(type);
    }
    setIsShown((current) => !current);
    return result;
  };

  return (
    <ProductListContext.Consumer>
      {() => (
        <div className={styles.product__wrapper + " " + "active"}>
          <ProductForm
            productCost={props.productCost}
            productCost2={props.productCost2}
            id={props.id}
            baseCost={props.baseCost}
            titleForm1={props.titleForm1}
            titleForm2={props.titleForm2}
            showImg={showImg}
            productName={props.productName}
          />
          <ProductImages
            showImgIfChecked={showImgIfChecked}
            showIngredient={showIngredient}
            showTypeFood={showTypeFood}
            isShown={isShown}
            showImg={showImg}
          />
        </div>
      )}
    </ProductListContext.Consumer>
  );
};

export default ProductWrapper;

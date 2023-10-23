import styles from "./Article.module.scss";
import ProductWrapper from "../ProductWrapper/ProductWrapper";
import { useState } from "react";
import { AppProvider } from "../ProductList/ProductListContext";
const Article = (props) => {
  const [show, setShow] = useState(false);
  const showHideArticle = () => {
    setShow((prev) => !prev);
  };
  return (
    <article className={styles.product + " " + "active"} id={props.id}>
      <header className={styles.product__header}>
        <h3 className={styles.product__name + " " + styles.no_spacing}>
          {props.productName}
          <i
            className={"fa fa-chevron-down" + " " + styles.product__icon}
            onClick={showHideArticle}
          ></i>
        </h3>
        <p className={styles.product__base_price + " " + styles.no_spacing}>
          {props.baseCost}
        </p>
      </header>
      <div className={styles.product__description}>
        {props.paragraphDescription}
      </div>
      {show == true ? (
        <ProductWrapper
          productCost={props.productCost}
          productCost2={props.productCost2}
          baseCost={props.baseCost}
          id={props.id}
          titleForm1={props.titleForm1}
          titleForm2={props.titleForm2}
          productName={props.productName}
        />
      ) : (
        <div></div>
      )}
    </article>
  );
};

export default Article;

import styles from "./ListItem.module.scss";
import Ingredient from "../Ingredient/Ingredient";
import ProductListContext from "../ProductList/ProductListContext";
const ListItem1 = (props) => {
  return (
    <ProductListContext.Consumer>
      {(context) => (
        <div>
          <li>
            <h3 className={styles.product__params_title}>{props.titleForm}</h3>
            <Ingredient
              ingredient={context.sIngredient1}
              addCashToTotalPrice={props.addCashToTotalPrice}
              addCashToTotalPrice2={props.addCashToTotalPrice2}
              titleForm={props.titleForm}
              auxProperty={props.auxProp}
              testProps={props.testProps}
              id={props.id}
              showImg={props.showImg}
            />
            <Ingredient
              ingredient={context.sIngredient2}
              addCashToTotalPrice={props.addCashToTotalPrice}
              addCashToTotalPrice2={props.addCashToTotalPrice2}
              titleForm={props.titleForm}
              auxProperty={props.auxProp}
              testProps={props.testProps}
              id={props.id}
              showImg={props.showImg}
            />
          </li>
        </div>
      )}
    </ProductListContext.Consumer>
  );
};

export default ListItem1;

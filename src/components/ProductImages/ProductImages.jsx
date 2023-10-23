import styles from "./ProductImages.module.scss";
import { useState, useEffect } from "react";
import ProductListContext from "../ProductList/ProductListContext";
const ProductImages = (props) => {
  const auxValue1 = String(props.showImgIfChecked);
  const ingredient = String(props.showIngredient);
  const typeFood = String(props.showTypeFood);
  ///////// pizza;
  let [styleIng0, setStyleIng0] = useState(false);
  let [styleIng1, setStyleIng1] = useState(false);
  let [styleIng2, setStyleIng2] = useState(false);
  let [styleIng3, setStyleIng3] = useState(false);
  let [styleIng4, setStyleIng4] = useState(false);
  let [styleIng5, setStyleIng5] = useState(false);
  let [styleIng6, setStyleIng6] = useState(false);
  let [styleIng7, setStyleIng7] = useState(false);
  ////////// salad
  let [styleIng8, setStyleIng8] = useState(false);
  let [styleIng9, setStyleIng9] = useState(false);
  let [styleIng10, setStyleIng10] = useState(false);
  let [styleIng11, setStyleIng11] = useState(false);
  let [styleIng12, setStyleIng12] = useState(false);
  let [styleIng13, setStyleIng13] = useState(false);
  let [styleIng14, setStyleIng14] = useState(false);

  let style0pizza = styles.Crust;
  let style0salad = styles.Plate;
  let style9 = styles.Breakfast;
  let style10 = styles.Doughnut;
  let style1pizza,
    style2pizza,
    style3pizza,
    style4pizza,
    style5pizza,
    style6pizza,
    style7pizza,
    style8pizza = " ";
  let style1salad,
    style2salad,
    style4salad,
    style5salad,
    style6salad,
    style7salad,
    style8salad = " ";
  let temporaryVar = props.isShown;

  useEffect(() => {
    ///////////////////////   pizza
    if (auxValue1 == "true" && ingredient == "Tomato" && typeFood == "pizza") {
      setStyleIng0((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Tomato" &&
      typeFood == "pizza"
    ) {
      setStyleIng0((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Sour cream" &&
      typeFood == "pizza"
    ) {
      setStyleIng1((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Sour cream" &&
      typeFood == "pizza"
    ) {
      setStyleIng1((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Olives" &&
      typeFood == "pizza"
    ) {
      setStyleIng2((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Olives" &&
      typeFood == "pizza"
    ) {
      setStyleIng2((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Red peppers" &&
      typeFood == "pizza"
    ) {
      setStyleIng3((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Red peppers" &&
      typeFood == "pizza"
    ) {
      setStyleIng3((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Green peppers" &&
      typeFood == "pizza"
    ) {
      setStyleIng4((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Green peppers" &&
      typeFood == "pizza"
    ) {
      setStyleIng4((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Mushrooms" &&
      typeFood == "pizza"
    ) {
      setStyleIng5((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Mushrooms" &&
      typeFood == "pizza"
    ) {
      setStyleIng5((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Fresh basil" &&
      typeFood == "pizza"
    ) {
      setStyleIng6((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Fresh basil" &&
      typeFood == "pizza"
    ) {
      setStyleIng6((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Salami" &&
      typeFood == "pizza"
    ) {
      setStyleIng7((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Salami" &&
      typeFood == "pizza"
    ) {
      setStyleIng7((current) => !current);
    }
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    // salad
    if (
      auxValue1 == "true" &&
      ingredient == "Cucumber" &&
      typeFood == "salad"
    ) {
      setStyleIng8((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Cucumber" &&
      typeFood == "salad"
    ) {
      setStyleIng8((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Tomatoes" &&
      typeFood == "salad"
    ) {
      setStyleIng9((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Tomatoes" &&
      typeFood == "salad"
    ) {
      setStyleIng9((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Olives" &&
      typeFood == "salad"
    ) {
      setStyleIng10((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Olives" &&
      typeFood == "salad"
    ) {
      setStyleIng10((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Feta cheese" &&
      typeFood == "salad"
    ) {
      setStyleIng11((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Feta cheese" &&
      typeFood == "salad"
    ) {
      setStyleIng11((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Cheese" &&
      typeFood == "salad"
    ) {
      setStyleIng12((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Cheese" &&
      typeFood == "salad"
    ) {
      setStyleIng12((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Fresh herbs" &&
      typeFood == "salad"
    ) {
      setStyleIng13((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Fresh herbs" &&
      typeFood == "salad"
    ) {
      setStyleIng13((current) => !current);
    } else if (
      auxValue1 == "true" &&
      ingredient == "Black pepper" &&
      typeFood == "salad"
    ) {
      setStyleIng14((current) => !current);
    } else if (
      auxValue1 == "false" &&
      ingredient == "Black pepper" &&
      typeFood == "salad"
    ) {
      setStyleIng14((current) => !current);
    }
  }, [temporaryVar == true]);
  /////////////////////////////////////////////////////////////////////////////////////
  //////////////////// pizza
  if (styleIng0 == true && typeFood == "pizza") {
    style2pizza = String(styles.Active) + " " + String(styles.Tomato);
  } else if (styleIng0 == false && typeFood == "pizza") {
    style2pizza = String(styles.noActive) + " " + String(styles.noTomato);
  }
  if (styleIng1 == true && typeFood == "pizza") {
    style1pizza = String(styles.Active) + " " + String(styles.Sour);
  } else if (styleIng1 == false && typeFood == "pizza") {
    style1pizza = String(styles.noActive) + " " + String(styles.noSour);
  }
  if (styleIng2 == true && typeFood == "pizza") {
    style5pizza = String(styles.Active) + " " + String(styles.Olives);
  } else if (styleIng2 == false && typeFood == "pizza") {
    style5pizza = String(styles.noActive) + " " + String(styles.noOlives);
  }
  if (styleIng3 == true && typeFood == "pizza") {
    style4pizza = String(styles.Active) + " " + String(styles.Red);
  } else if (styleIng3 == false && typeFood == "pizza") {
    style4pizza = String(styles.noActive) + " " + String(styles.noRed);
  }
  if (styleIng4 == true && typeFood == "pizza") {
    style7pizza = String(styles.Active) + " " + String(styles.Green);
  } else if (styleIng4 == false && typeFood == "pizza") {
    style7pizza = String(styles.noActive) + " " + String(styles.noGreen);
  }
  if (styleIng5 == true && typeFood == "pizza") {
    style6pizza = String(styles.Active) + " " + String(styles.Mushrooms);
  } else if (styleIng5 == false && typeFood == "pizza") {
    style6pizza = String(styles.noActive) + " " + String(styles.noMushrooms);
  }
  if (styleIng6 == true && typeFood == "pizza") {
    style8pizza = String(styles.Active) + " " + String(styles.Fresh);
  } else if (styleIng6 == false && typeFood == "pizza") {
    style8pizza = String(styles.noActive) + " " + String(styles.noFresh);
  }
  if (styleIng7 == true && typeFood == "pizza") {
    style3pizza = String(styles.Active) + " " + String(styles.Salami);
  } else if (styleIng7 == false && typeFood == "pizza") {
    style3pizza = String(styles.noActive) + " " + String(styles.noSalami);
  }
  ///////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////
  // salad

  if (styleIng8 == true && typeFood == "salad") {
    style6salad = String(String(styles.Active) + " " + String(styles.Cucumber));
  } else if (styleIng8 == false && typeFood == "salad") {
    style6salad = String(
      String(styles.noActive) + " " + String(styles.Cucumber)
    );
  }
  if (styleIng9 == true && typeFood == "salad") {
    style1salad = String(styles.Active) + " " + String(styles.Tomatoes);
  } else if (styleIng9 == false && typeFood == "salad") {
    style1salad = String(styles.noActive) + " " + String(styles.noTomatoes);
  }
  if (styleIng10 == true && typeFood == "salad") {
    style5salad = String(styles.Active) + " " + String(styles.SOlives);
  } else if (styleIng10 == false && typeFood == "salad") {
    style5salad = String(styles.noActive) + " " + String(styles.noSOlives);
  }
  if (styleIng11 == true && typeFood == "salad") {
    style4salad = String(styles.Active) + " " + String(styles.Feta);
  } else if (styleIng11 == false && typeFood == "salad") {
    style4salad = String(styles.noActive) + " " + String(styles.noFeta);
  }
  if (styleIng12 == true && typeFood == "salad") {
    style7salad = String(styles.Active) + " " + String(styles.Cheese);
  } else if (styleIng12 == false && typeFood == "salad") {
    style7salad = String(styles.noActive) + " " + String(styles.noCheese);
  }
  if (styleIng13 == true && typeFood == "salad") {
    style2salad = String(styles.Active) + " " + String(styles.Fresh);
  } else if (styleIng13 == false && typeFood == "salad") {
    style2salad = String(styles.noActive) + " " + String(styles.noFresh);
  }
  if (styleIng14 == true && typeFood == "salad") {
    style8salad = String(styles.Active) + " " + String(styles.Black);
  } else if (styleIng14 == false && typeFood == "salad") {
    style8salad = String(styles.noActive) + " " + String(styles.noBlack);
  }
  return (
    <ProductListContext.Consumer>
      {(context) => (
        <div className={styles.wrapper}>
          <div className={styles.zdjecie}>
            <img
              className={style0salad + " " + style0pizza}
              src={context.productImage7}
            ></img>
          </div>
          {/* crust, plate*/}
          <div className={styles.zdjecie}>
            <img
              className={style1pizza + " " + style1salad}
              src={context.productImage1}
            ></img>
          </div>
          {/* sour cream, tomatoes */}
          <div className={styles.zdjecie}>
            <img
              className={style2pizza + " " + style8salad}
              src={context.productImage0}
            ></img>
          </div>
          {/* tomato-sauce, black pepper*/}
          <div className={styles.zdjecie}>
            <img
              className={style3pizza + " " + style5salad}
              src={context.productImage2}
            ></img>
          </div>
          {/* salami, olives */}
          <div className={styles.zdjecie}>
            <img
              className={style4pizza + " " + style2salad}
              src={context.productImage3}
            ></img>
          </div>
          {/* red-pepper, herbs */}
          <div className={styles.zdjecie}>
            <img
              className={style5pizza + " " + style4salad}
              src={context.productImage4}
            ></img>
          </div>
          {/* olives, feta */}
          <div className={styles.zdjecie}>
            <img
              className={style6pizza + " " + style6salad}
              src={context.productImage5}
            ></img>
          </div>
          {/* mushrooms, cucumber */}
          <div className={styles.zdjecie}>
            <img
              className={style7pizza + " " + style7salad}
              src={context.productImage6}
            ></img>
          </div>
          {/* mushrooms, cheese  */}
          <div className={styles.zdjecie}>
            <img className={style8pizza} src={context.productImage8}></img>
          </div>
          {/* green-peppers, breakfast */}
          <div className={styles.zdjecie}>
            <img className={style9} src={context.productImage9}></img>
          </div>
          {/* doughnut */}
          <div className={styles.zdjecie}>
            <img className={style10} src={context.productImage10}></img>
          </div>
        </div>
      )}
    </ProductListContext.Consumer>
  );
};

export default ProductImages;

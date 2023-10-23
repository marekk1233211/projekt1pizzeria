import styles from "./ProductList.module.scss";
import productImage0 from "../../images/pizza/tomato-sauce.svg";
import productImage1 from "../../images/pizza/sour-cream.svg";
import productImage2 from "../../images/pizza/salami.svg";
import productImage3 from "../../images/pizza/red-peppers.svg";
import productImage4 from "../../images/pizza/olives.svg";
import productImage5 from "../../images/pizza/mushrooms.svg";
import productImage6 from "../../images/pizza/green-peppers.svg";
import productImage7 from "../../images/pizza/crust.svg";
import productImage8 from "../../images/pizza/basil.svg";
import productImage9 from "../../images/salad/plate.svg";
import productImage10 from "../../images/salad/tomatoes.svg";
import productImage11 from "../../images/salad/salad-olives.svg";
import productImage12 from "../../images/salad/herbs.svg";
import productImage13 from "../../images/salad/feta.svg";
import productImage14 from "../../images/salad/cucumber.svg";
import productImage15 from "../../images/salad/cheese.svg";
import productImage16 from "../../images/salad/black-pepper.svg";
import productImage17 from "../../images/breakfast.svg";
import productImage18 from "../../images/doughnut.svg";
import Article from "../Article/Article";
import ProductListContext from "./ProductListContext";
const ProductList = () => {
  return (
    <div className={styles.containerWrapper}>
      <ProductListContext.Provider
        value={{
          productCost: 2,
          productCost2: 1,
          productImage0: productImage0,
          productImage1: productImage1,
          productImage2: productImage2,
          productImage3: productImage3,
          productImage4: productImage4,
          productImage5: productImage5,
          productImage6: productImage6,
          productImage7: productImage7,
          productImage8: productImage8,
          sIngredient1: "Tomato",
          sIngredient2: "Sour cream",
          ingredient1: "Olives",
          ingredient2: "Red peppers",
          ingredient3: "Green peppers",
          ingredient4: "Mushrooms",
          ingredient5: "Fresh basil",
          ingredient6: "Salami",
        }}
      >
        <Article
          titleForm1="Sauce"
          titleForm2="Toppings"
          baseCost="4"
          productName="NONNA ALBAS PIZZA"
          paragraphDescription="The true taste of Italy - homemade pizza as prepared by our grandmothers in old-fashoned brick ovens. Choose your favorite topping and enjoy your comfort food! All ingredients come straight from eco-friendly, trusted farms in the Italian countryside."
          id="pizza"
          productCost="2"
          productCost2="1"
        />
      </ProductListContext.Provider>
      <ProductListContext.Provider
        value={{
          productCost2: 1,
          productImage0: productImage16,
          productImage1: productImage10,
          productImage2: productImage11,
          productImage3: productImage12,
          productImage4: productImage13,
          productImage5: productImage14,
          productImage6: productImage15,
          productImage7: productImage9,
          ingredient1: "Cucumber",
          ingredient2: "Tomatoes",
          ingredient3: "Olives",
          ingredient4: "Feta cheese",
          ingredient5: "Cheese",
          ingredient6: "Fresh herbs",
          ingredient7: "Black pepper",
          productName: "NONNO ALBERTOS SALAD",
        }}
      >
        <Article
          titleForm1="Ingredients"
          productCost2="1"
          baseCost="2"
          productName="NONNO ALBERTOS SALAD"
          paragraphDescription="A delicious salad made of fresh, home-grown products on a crispy lettuce base."
          id="salad"
        />
      </ProductListContext.Provider>
      <ProductListContext.Provider
        value={{
          productCost2: 5,
          productImage9: productImage17,
          ingredient1: "Latte",
          ingredient2: "Cappucino",
          ingredient3: "Espresso",
          ingredient4: "Macchiato",
        }}
      >
        <Article
          titleForm1="Coffe type"
          productCost2="5"
          baseCost="3"
          productName="ZIA GIULIAS BREAKFAST"
          paragraphDescription="Theres no better way to start your day than indulging yourself with a cup of fresh Italian coffee and crispy waffels. Made just for you on the spot, this breakfast combo has been our guests favorite for over 50 years."
          id="breakfast"
        />
      </ProductListContext.Provider>
      <ProductListContext.Provider value={{ productImage10: productImage18 }}>
        <Article
          baseCost="3"
          productName="ZIO STEFANOS DOUGHNUT"
          paragraphDescription="Treat yourself with this soft, freshly baked cookie. The recipe has been handed down from generation to generation in our family and it has won us several first place prizes in local competitions."
          id="doughnut"
        />
      </ProductListContext.Provider>
    </div>
  );
};

export default ProductList;

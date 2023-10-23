import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [addToCartClicked, setAddToCartClicked] = useState(false);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(0);

  const auxFunToAddComponent = (addToCartClicked) => {
    setAddToCartClicked(addToCartClicked);
  };
  const addTotalCashFromCartToHeader = (nextOrder) => {
    setTotalPrice((prev) => prev + nextOrder);
    setOrderQuantity((prev) => prev + 1);
  };
  const getItemInfo = (itemName, itemPrice, itemQuantity) => {
    setItemName(itemName);
    setItemPrice(itemPrice);
    setItemQuantity(itemQuantity);
  };
  const removeItemFromHeader = (thisOrderPrice) => {
    console.log(thisOrderPrice.itemPrice * thisOrderPrice.itemQuantity);
    setTotalPrice(
      (prev) => prev - thisOrderPrice.itemPrice * thisOrderPrice.itemQuantity
    );
    setOrderQuantity((prev) => prev - 1);
  };
  return (
    <AppContext.Provider
      value={{
        totalPrice,
        orderQuantity,
        addToCartClicked,
        itemName,
        itemPrice,
        itemQuantity,
        auxFunToAddComponent,
        addTotalCashFromCartToHeader,
        getItemInfo,
        removeItemFromHeader,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

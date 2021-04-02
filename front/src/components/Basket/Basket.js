import React from "react";
import { useSelector } from "react-redux";
import { BasketList } from "./BasketList";
import "./orderProcessStyle.css";
import "./basketListStyle.css";
import "./basket.css";
import { EmptyCart } from "./EmptyCart";

const Basket = () => {
  const shoppingList = useSelector((state) => state.basket.shoppingList);

  return (
    <div className="basket">
      {shoppingList.length ? BasketList(shoppingList) : EmptyCart()}
    </div>
  );
};

export default Basket;
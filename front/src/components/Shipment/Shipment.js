import React from "react";
import orderProgress from "./orderProcess";
import { useSelector } from "react-redux";
import SelectingFormValues from "./Form";
import "./shipment.css";
import "../Basket/orderProcessStyle.css";

const Shipment = () => {

    const shoppingList = useSelector(state => state.basket.shoppingList);
    const order = shoppingList.map(item => {
        return { id: item.id, quantity: item.quantity }
    })

    return (
        <div className="main">
            {orderProgress()}
            <div className="form-container">
                <SelectingFormValues order={order}/>
            </div>
        </div>
    )
}

export default Shipment;
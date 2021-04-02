import React from "react";
import { useSelector } from "react-redux";
import orderProgress from "./orderProcess";
import { confirmation } from "./renderedConfirmation";
import "./confirmation.css";

const ConfirmationPage = () => {
    const { firstName, lastName } = useSelector(state => state.form.order.values);
    return (
        <div className="main">
            {orderProgress}
            {confirmation(firstName, lastName)}
        </div>
    )
}

export default ConfirmationPage
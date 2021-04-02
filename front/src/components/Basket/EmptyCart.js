import React from "react";
import { Link } from 'react-router-dom';
import icon from '../../assets/empty car.png';

export const EmptyCart = () => {
    return (
      <div className="error">
        <div className="empty-cart-section">
          <img src={icon} alt="" aria-label="Pusty koszyk" />
        </div>
        <div className="empty-cart-section">
          <span className="empty-cart-info">Twój koszyk jest pusty</span>
          <Link to="/">
            <span className="return" tabIndex="0">
              Przejdź do strony głównej
            </span>
          </Link>
        </div>
      </div>
    );
};
  
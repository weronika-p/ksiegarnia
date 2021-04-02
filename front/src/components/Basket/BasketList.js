import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import orderProgress from "./orderProcess";
import { addToShoppingCart, removeBook, reduceQty } from "../../redux/basket/basketActions";

export const BasketList = (list) => {
  const dispatch = useDispatch();

  const roundingNumber = (number, quantity) => {
    return Number(Math.round((number * quantity) / 100 + "e2") + "e-2");
  };

  const incrementing = (item, e) => {
    const key = e.which || e.keyCode || 0;
    if (key === 13) {
      dispatch(addToShoppingCart(item));
    }
  };

  const decrementing = (item, e) => {
    const key = e.which || e.keyCode || 0;
    if (key === 13) {
      dispatch(reduceQty(item));
    }
  };

  const removing = (item, e) => {
    const key = e.which || e.keyCode || 0;
    if (key === 13) {
      dispatch(removeBook(item));
    }
  };

  return (
    <div className="main">
      {orderProgress()}
      <div className="basket-list">
        <div className="column-labels">
          <span className="cover-label">Książka</span>
          <span className="book-title-label">Tytuł książki</span>
          <span className="qty">Ilość</span>
          <span className="total-label">Suma</span>
          <span className="trash-label"></span>
        </div>
        {list.map((item) => {
          return (
            <div className="item">
              <div className="cover">
                <img className="book-img" aria-label="Okładka książki" src={item.cover_url}></img>
              </div>
              <div className="book-title">{item.title}</div>
              <div className="qty-basket">
                <span
                  className="fa-stack"
                  aria-label="Zwiększ ilość"
                  onClick={() => dispatch(addToShoppingCart(item))}
                  onKeyDown={(e) => incrementing(item, e)}
                  tabIndex="0"
                >
                  <i className="fa fa-circle fa-stack-2x increment"></i>
                  <i className="fas fa-plus fa-stack-1x"></i>
                </span>
                <span className="quantity-basket">{item.quantity}</span>
                <span
                  className="fa-stack"
                  aria-label="Zmniejsz ilość"
                  onClick={() => dispatch(reduceQty(item))}
                  onKeyDown={(e) => decrementing(item, e)}
                  tabIndex="0"
                >
                  <i className="fa fa-circle fa-stack-2x decrement"></i>
                  <i className="fas fa-minus fa-stack-1x"></i>
                </span>
              </div>
              <div className="total">{roundingNumber(item.price, item.quantity).toFixed(2)} zł</div>
              <div className="trash">
                <span
                  className="fa-stack"
                  aria-label="Usuń"
                  onClick={() => dispatch(removeBook(item))}
                  onKeyDown={(e) => removing(item, e)}
                  tabIndex="0"
                >
                  <i className="fa fa-circle fa-stack-2x trash-button"></i>
                  <i className="fas fa-trash-alt fa-stack-1x"></i>
                </span>
              </div>
            </div>
          );
        })}
        <div className="total-cost">
          <span className="total-cost-text">Wartość do zapłaty:</span>
          <span className="total-cost-number">
            {list.reduce((a, b) => a + roundingNumber(b.price, b.quantity), 0).toFixed(2)} zł
          </span>
          <Link to="/shipment">
            <button className="go-to-shipment" aria-label="Przejdź dalej" type="button">
              DALEJ
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
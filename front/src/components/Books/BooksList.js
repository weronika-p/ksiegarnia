import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBooks } from '../../redux/operations'
import { addToShoppingCart } from "../../redux/basket/basketActions";
import "./style.css";
import { renderedBooksList } from './renderedBooksList';
import ErrorComponent from "./Error";


const BooksList = () => {

  const dispatch = useDispatch();

  useEffect(() => { dispatch(getAllBooks()) }, []);
  
  const booksList = useSelector(state => state.books.books);
  const filteredBooksList = useSelector(state => state.books.filteredBooks);
  const errorMessage = useSelector(state => state.books.errorMessage);
  const isError = useSelector(state => state.books.isError);
  const errorCode = useSelector(state => state.books.errorCode);

  const handleShoppingCart = book => dispatch(addToShoppingCart(book));

  const addingBook = (e, book) => {
    const key = e.which || e.keyCode;
    if (key === 13) {
        handleShoppingCart(book);
    }
  }

  const actualList = filteredBooksList.length ? filteredBooksList : booksList

  return (
    <ul className="list">
      {isError
        ? ErrorComponent(errorCode, errorMessage)
        : renderedBooksList(actualList, handleShoppingCart, addingBook)}
    </ul>
  );
}

export default BooksList;
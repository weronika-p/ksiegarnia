import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import toggleSearchBar from "../../redux/header/headerAction";
import { handleQty } from "../../redux/basket/basketUtils"
import './styles.css'
import logo from '../../assets/Księgarnia.png'
import { searchingBooks } from '../../redux/books/booksActions';


const Header = () => {
    const dispatch = useDispatch();

    const { search } = useSelector(state => state.search);

    const numOfBooksInCart = useSelector(state => handleQty(state.basket.shoppingList));

    const onSearch = searchName => dispatch(searchingBooks(searchName));
    const onToggleSearchBar = () => dispatch(toggleSearchBar());

    const onToggleSearchBarKeyDown = e => {
        const key = e.which || e.keyCode || 0;
        if (key === 13) {
            onToggleSearchBar();
        }
    }

    return (
        <nav className="header"> 
            <div className="logo" tabIndex="0">
                <Link to='/'>
                    <img src={logo} width="100px" height="100px" alt="" aria-label="logo" />
                </Link>
            </div>
            <ul className="menu">
                <li>
                    <input
                    type='text'
                    id='search'
                    name='search'
                    aria-label='Znajdź w księgarni'
                    placeholder='Znajdź w księgarni'
                    className={search ? 'search-active' : 'search-hidden'}
                    onChange={e => onSearch(e.target.value)}
                    />
                </li>
                <li>
                    <span className="fa-stack fa-2x" aria-label="Wyszukaj" onClick={onToggleSearchBar} onKeyDown={onToggleSearchBarKeyDown} tabIndex="0">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fas fa-search fa-stack-1x search"></i>
                    </span>
                </li>
                <li>
                    <Link to='/basket'>
                        <span className="fa-stack fa-2x" aria-label="Przejdź do koszyka">
                            <i className="fa fa-circle fa-stack-2x"></i>
                            <i className="fa fa-shopping-cart fa-stack-1x cart"></i>
                        </span>
                        <span className="quantity">({numOfBooksInCart})</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
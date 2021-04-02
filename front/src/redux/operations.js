import { fetchingBooks, fetchBooksError } from "./books/booksActions";
import { url } from "../assets/url";

const numOfPages = [1, 2];

const fetchBooks = async () => {
    try {
        const response = await Promise.all(numOfPages.map(async page => {
            return (await (await fetch(`${url}book?page=${page}`)).json()).data
        }));
        if (!response) throw (new Error('Błąd serwera'))
        return response.reduce((a, b) => a.concat(b), [])
    } catch (error) {
        throw error;
    }
}

export const getAllBooks = () => async dispatch => {
    try {
        const books = await fetchBooks();
        dispatch(fetchingBooks(books))
    } catch (error) {
        dispatch(fetchBooksError(error))
    }
}
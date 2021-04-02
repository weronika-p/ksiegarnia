import { updateList } from "./booksUtils"

const INITIAL_STATE = {
  books: [],
  filteredBooks: [],
  isError: false,
  errorMessage: '',
  errorCode: -1
}

const booksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return {
        ...state, 
        books: action.payload,
        isError: false,
        errorMessage: '',
        errorCode: -1,
      }
    case 'SEARCH_BOOKS':
      return {
        ...state,
        filteredBooks: updateList({
          searchName: action.payload,
          books: state.books
        })
      }
    case 'SET_BOOKS_ERROR':
      return {
        ...state,
        isError: true,
        errorMessage: action.payload.message,
        errorCode: action.payload.code,
      }
    default:
      return state
  }
}

export default booksReducer
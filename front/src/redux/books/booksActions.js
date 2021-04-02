export const fetchingBooks = item => ({
  type: 'SET_BOOKS',
  payload: item
})

export const searchingBooks = item => ({
  type: 'SEARCH_BOOKS',
  payload: item
})

export const fetchBooksError = e => ({
  type: 'SET_BOOKS_ERROR',
  payload: {
    message: e.message,
    code: e.code || 500,
  }
});
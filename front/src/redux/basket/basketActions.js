export const addToShoppingCart = item => ({
    type: 'ADD_BOOK',
    payload: item
})

export const removeBook = book => ({
    type: 'REMOVE_BOOK',
    payload: book
})

export const reduceQty = book => ({
    type: 'REDUCE_QTY',
    payload: book
})
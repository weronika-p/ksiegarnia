export const existingBook = ({ list, book }) => {
    return list.find(item => item.id === book.id)
};

export const handleAddToCart = ({ list, book }) => {
    const isBookAlreadyInBasket = existingBook({ list, book });
    if(isBookAlreadyInBasket) {
        return list.map(item => 
            item.id === book.id
            ? {
                ...item,
                quantity: item.quantity + 1
            } : item
        )
    } 
    return [
        ...list,
        {
            ...book,
            quantity: 1
        }
    ]
}

export const handleRemoveFromCart = ({ list, book }) => {
    return list.filter(item => item.id !== book.id)
}

export const handleReduceBook = ({ list, book }) => {
    const actualBook = list.find(item => item.id === book.id);
    console.log(actualBook);

    if (actualBook.quantity === 1) {
        return list.filter(
            item => item.id !== actualBook.id
        );
    }

    return list.map(item =>
    item.id === actualBook.id 
    ?
    {
        ...item,
        quantity: item.quantity - 1
    } : item
    )
}

export const handleQty = list => list.reduce((a, b) => a + b.quantity, 0)
const adjustingName = e => {
    let adjustedName = e.toLowerCase();
    adjustedName = adjustedName.replace(/\s/g, '');
    return adjustedName
}

const filteringBooks = (searchName, books) => { 
    console.log(books)
    return books.filter(book => {
        const newListOfTitles = adjustingName(book.title);
        const newListOfAuthors = adjustingName(book.author);
        const searchingName = adjustingName(searchName);
        return newListOfTitles.includes(searchingName) || newListOfAuthors.includes(searchName)
    })
}

export const updateList = props => {
    const { searchName, books } = props
    const filteredList = searchName
    ? filteringBooks(searchName, books)
    : [];
    return filteredList
}
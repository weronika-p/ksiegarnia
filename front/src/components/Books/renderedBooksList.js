export const renderedBooksList = (actualList, handleShoppingCart, addingBook) =>
  actualList.map((book) => {
    const { id, cover_url, title, author, price, pages } = book;

    return (
      <li className="box" key={id}>
        <img className="book-cover" aria-label="Okładka książki" src={cover_url}></img>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <p className="price">{(price / 100).toFixed(2)} zł</p>
        <p className="pages">Liczba stron: {pages}</p>
        <button
          className="add-to-cart"
          aria-label="Dodaj do koszyka"
          type="button"
          onClick={() => handleShoppingCart(book)}
          onKeyDown={(e) => addingBook(e, book)}
        >
          DODAJ DO KOSZYKA
        </button>
      </li>
    );
  });
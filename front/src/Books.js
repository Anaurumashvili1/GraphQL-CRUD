import { gql, useQuery, useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { findByAuthor } from "./queries";
const Books = ({ books }) => {
  const [getBook, result] = useLazyQuery(findByAuthor);
  const [book, setBook] = useState(null);

  const showBook = (author) => {
    getBook({ variables: { nameToSearch: author } });
  };

  useEffect(() => {
    if (result.data) {
      setBook(result.data.allBooks);
    }
  }, [result.data]);

  if (book) {
    console.log(book);

    return (
      <div>
        {book.map((book) => (
          <div>{book.title}</div>
        ))}
        <button onClick={() => setBook(null)}>Close</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Books</h2>

      {books.map((p) => (
        <div key={p.title}>
          {p.author} {p.genres.first}
          <button onClick={() => showBook(p.author)}>show books</button>
        </div>
      ))}
    </div>
  );
};

export default Books;

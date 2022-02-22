import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { BOOK } from "./queries";

const AddBook = ({ ALL_BOOKS, setError }) => {
  const [title, setTitle] = useState("");

  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState(0);
  const [first, setFirstGenre] = useState("");
  const [second, setSecondGenre] = useState("");

  const [createBook] = useMutation(BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }],
    onError: (error) => {
      setError(error.graphQLErrors[0].message);
    },
  });

  const submit = (e) => {
    e.preventDefault();
    const genres = [first, second];
    createBook({
      variables: { title, author, published, genres },
    });
    console.log(typeof published);
  };
  return (
    <>
      <div>
        <h2>create new</h2>
        <form onSubmit={submit}>
          <div>
            title{" "}
            <input
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div>
            Author{" "}
            <input
              value={author}
              onChange={({ target }) => setAuthor(target.value)}
            />
          </div>
          <div>
            published{" "}
            <input
              value={published}
              onChange={({ target }) => setPublished(target.value * 1)}
            />
          </div>
          <div>
            First Genre{" "}
            <input
              value={first}
              onChange={({ target }) => setFirstGenre(target.value)}
            />
          </div>
          <div>
            Second Genre{" "}
            <input
              value={second}
              onChange={({ target }) => setSecondGenre(target.value)}
            />
          </div>
          <button type="submit">add!</button>
        </form>
      </div>
    </>
  );
};

export default AddBook;

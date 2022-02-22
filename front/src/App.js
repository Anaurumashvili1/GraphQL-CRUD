import React from "react";
import { gql, useQuery } from "@apollo/client";
import Books from "./Books";
import { useState } from "react";
import AddBook from "./addBook";
import EditAuthor from "./EditAuthor";
import { ALL_BOOKS } from "./queries";

const App = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const [addbook, setAddBook] = useState(false);
  const result = useQuery(ALL_BOOKS);
  console.log(result);
  if (result.loading) {
    return <div>loading...</div>;
  }

  const notify = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage(null);
    }, 10000);
  };

  return (
    <>
      <Notify errorMessage={errorMessage} />
      <Books books={result.data.allBooks} />;
      <button
        onClick={() => {
          setAddBook(!addbook);
        }}>
        Add Book
      </button>
      {addbook && <AddBook setError={notify} />}
      <EditAuthor setError={notify} />
    </>
  );
};

const Notify = ({ errorMessage }) => {
  if (!errorMessage) {
    return null;
  }
  return <div style={{ color: "red" }}>{errorMessage}</div>;
};

export default App;

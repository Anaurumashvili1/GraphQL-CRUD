import { gql } from "@apollo/client";

export const BOOK = gql`
  mutation addBook(
    $title: String!
    $author: String!
    $published: Int!
    $genres: [String!]!
  ) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      title
      author
      published

      genres {
        first
        second
      }
    }
  }
`;

export const findByAuthor = gql`
  query allBooks($nameToSearch: String!) {
    allBooks(author: $nameToSearch) {
      title
      author
    }
  }
`;

export const find = gql`
  query allBooksByAuthor($nameToSearch: String!) {
    allBooks(author: $nameToSearch) {
      title
    }
  }
`;

export const ALL_BOOKS = gql`
  query {
    allBooks {
      title
      author
      genres {
        first
        second
        third
      }
    }
  }
`;
export const EDIT_AUTHOR = gql`
  mutation editAuthor($name: String!, $born: Int!) {
    editAuthor(name: $name, born: $born) {
      name
      born
      id
    }
  }
`;

import { gql } from "@apollo/client";
// LOGIN USER
export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
// ADD USER
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    adduser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          author
          description
          title
          image
          link
        }
      }
      token
    }
  }
`;
// SAVE_BOOK
export const SAVE_BOOK = gql`
  mutation saveBook($input: savedBook!) {
    saveBook(input: $input) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        author
        description
        title
        image
        link
      }
    }
  }
`;
// REMOVE BOOK
export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        author
        description
        title
        image
        link
      }
    }
  }
`;

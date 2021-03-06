const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    username: String
    email: String
    bookCount: Int
    savedBook: [Book]
  }
  type Book {
    bookId: ID!
    author: [String]
    description: String
    title: String
    image: String
    link: String
  }
  input savedBook {
    bookId: ID!
    author: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
  }

  type Query {
    me: String
  }
`;
module.exports = typeDefs;

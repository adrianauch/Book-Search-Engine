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
    bookId: String
    author: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: String!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    # saveBook(input: savedBook!): User
    removebook(bookId: ID!): User
  }

  type Query {
    me: String
  }
`;
module.exports = typeDefs;

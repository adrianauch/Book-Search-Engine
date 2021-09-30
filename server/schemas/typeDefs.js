const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Mutation {
    login(email:String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
}
type User {
    _id: ID ! 
    username: String!
    email: String
    bookCount: Int
    savedBook: [Book]
}

type Book {
    bookId: ID!
    author: [String] 
    description: String
    title: String!
    image: String
    link: String
   
}
type savedBook {
    bookId: String
   title: String 
   description: String
   author: [String]
   image: String
   link: String 
}

type Query {
    me: User
}
type Auth {
    token: ID!
    user : User
}

}`;

module.exports = typeDefs;

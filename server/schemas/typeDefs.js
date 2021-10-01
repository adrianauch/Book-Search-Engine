const { gql } = require("apollo-server-express");

const typeDefs = gql`
{
    type Mutation {
        login(email: String!, password: String!) : Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: savedBook!): User
        removebook(bookId: ID!): User
    }
    type User {
        _id: ID! 
        username: String
        email: String
        bookCount: Int
        savedBook [Book]
    }
    type Book {
        bookId: String
        authors: [String]
        description: String
        title: String 
        image: String
        link: String
    }
    type Query {
        me: User
    }
    type Auth {
        token: ID!
        user: User
    }

}`;
module.exports = typeDefs;

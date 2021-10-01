const { User, Book } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const User = await User.create({ name, email, password });
      const token = signToken(User);

      return { token, User };
    },
    login: async (parent, { email, password }) => {
      const User = await User.findOne({ email });

      if (!User) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await User.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(User);
      return { token, User };
    },

    // Add a third argument to the resolver to access data in our `context`
    // saveBook: async (parent, args, context) => {
    //   // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
    //   if (context.user) {
    //     return User.findOneAndUpdate(
    //       { _id: UserId },
    //       {
    //         $addToSet: { savedBooks: args.input },
    //       },
    //       {
    //         new: true,
    //       }
    //     );
    //   }
    //   // If user attempts to execute this mutation and isn't logged in, throw an error
    //   throw new AuthenticationError("You need to be logged in!");
    // },

    // Make it so a logged in user can only remove a skill from their own profile
    removeBook: async (parent, { skill }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: args.bookId } } },
          { new: true }
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;

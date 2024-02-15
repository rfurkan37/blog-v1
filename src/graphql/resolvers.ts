import User from "../models/User.js"
import Post from "../models/Post.js";
import { connectToDB } from "../database/db-connection.js";


await connectToDB();
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    getPosts: async () => {
      try {
        const posts = await Post.find();
        return posts;

      } catch (err) {
        throw new Error('Failed to get posts.')
      }
    },
    getUsers: async () => {
      try {
        const users = await User.find();
        return users;
      } catch (error) {
        throw new Error('Failed to get users.')
      }
    }
  },

  Mutation: {
    createPost: async ( _ : any, {input}) => {
      try {
        const newPost = await Post.create(input);
        return newPost;
      } catch (error) {
        throw new Error('Failed to create post.');
      }
    },
    deletePost: async (_: any, { id }) => {
      try {
        await Post.findByIdAndDelete(id);
        return true;
      } catch (error) {
        throw new Error('Failed to delete post.');
      }
    },
    updatePost: async (_: any, { id , input}) => {
      try {
        const updatedPost = await Post.findByIdAndUpdate(id, input);
        return updatedPost;
      }
      catch(error)
      {
        throw new Error('Failed to update post.');
      }
    },
    createUser: async ( _ : any, {input}) => {
      try {
        const newUser = await User.create(input);
        return newUser;
      } catch (error) {
        throw new Error('Failed to create user.');
      }
    },
    deleteUser: async (_: any, { id }) => {
      try {
        await User.findByIdAndDelete(id);
        return true;
      } catch (error) {
        throw new Error('Failed to delete user.')
      }
    },
    updateUser: async (_: any, {id, input}) => {
      try {
        const UsertobeUpdate = await User.findById(id);
        UsertobeUpdate.email = input.email;
        UsertobeUpdate.username = input.username;
        UsertobeUpdate.password = input.password;
        await UsertobeUpdate.save();
        return UsertobeUpdate;
      } catch (error) {
        throw new Error("Failed to update user.");
      }
    }
  }
};

export default resolvers;
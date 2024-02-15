
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Post" type defines the queryable fields for every post in our data source.
type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    createdAt: String!
}
  
type Post {
    id: ID!
    title: String!
    content: String!
    author: String!
    createdAt: String!
}

input userInput {
    username: String!
    email: String!
    password: String!
}

input postInput {
    title: String!
    content: String!
    author: String!
}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    getUsers: [User]
    getPosts: [Post]
    getUserById: User
    getPostByID: Post
  }

  type Mutation {
    createUser(input: userInput): User!
    createPost(input: postInput): Post!
    deleteUser(id: ID!): Boolean
    deletePost(id: ID!): Boolean
    updateUser(id: ID!, input: userInput): User!
    updatePost(id: ID!, input: postInput): Post!
  }
`;

export default typeDefs;
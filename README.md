
# Blog API - GraphQL & TypeScript

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GraphQL](https://img.shields.io/badge/GraphQL-E434AA?style=for-the-badge&logo=graphql&logoColor=white)](https://graphql.org/)
[![Apollo Server](https://img.shields.io/badge/Apollo%20Server-311C87?style=for-the-badge&logo=apollo-graphql&logoColor=white)](https://www.apollographql.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

A modern blog API built with GraphQL, TypeScript, and Apollo Server. This project demonstrates best practices for building scalable GraphQL APIs with type safety and modern development tools.

## ✨ Features

- 🚀 **GraphQL API** - Modern query language for APIs
- 📝 **TypeScript** - Full type safety and better developer experience
- 🏗️ **Apollo Server** - Production-ready GraphQL server
- 🗄️ **MongoDB** - NoSQL database with Mongoose ODM
- 🔐 **Authentication** - Secure user authentication with bcrypt
- 📱 **CRUD Operations** - Complete blog post and user management
- 🎯 **Type Definitions** - Well-structured GraphQL schema
- 🔧 **Development Tools** - Hot reload and TypeScript compilation

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Language:** TypeScript
- **API:** GraphQL with Apollo Server
- **Database:** MongoDB with Mongoose
- **Authentication:** bcrypt for password hashing
- **Environment:** dotenv for configuration

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/rfurkan37/blog-v1.git
cd blog-v1
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/blog-api
JWT_SECRET=your-secret-key
```

### 4. Start the development server

```bash
npm start
```

The GraphQL playground will be available at `http://localhost:4000/graphql`

## 📖 API Documentation

### GraphQL Schema

The API provides the following main types:

#### User
```graphql
type User {
  id: ID!
  username: String!
  email: String!
  posts: [Post!]!
}
```

#### Post
```graphql
type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  createdAt: String!
  updatedAt: String!
}
```

### Example Queries

#### Get all posts
```graphql
query {
  posts {
    id
    title
    content
    author {
      username
    }
  }
}
```

#### Create a new post
```graphql
mutation {
  createPost(input: {
    title: "My First Post"
    content: "This is the content of my first post"
  }) {
    id
    title
    content
  }
}
```

## 📁 Project Structure

```
src/
├── index.ts          # Application entry point
├── database/         # Database configuration
│   └── db-connection.ts
├── graphql/          # GraphQL schema and resolvers
│   ├── resolvers.ts
│   └── typeDefs.ts
└── models/           # Database models
    ├── Post.ts
    └── User.ts
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Apollo GraphQL Documentation](https://www.apollographql.com/docs/apollo-server/getting-started/)
- Created during internship at Piri Medya
- Built for learning GraphQL and TypeScript

## 📞 Contact

**Recep Furkan Akın**

- GitHub: [@rfurkan37](https://github.com/rfurkan37)
- Project Link: [https://github.com/rfurkan37/blog-v1](https://github.com/rfurkan37/blog-v1)



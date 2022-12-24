import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  #Types
  type Group {
    id: ID!
    name: String!
    description: String!
    owner: User!
    adminCount: Int!
    admins: [User]
  }

  type User {
    id: ID!
    name: String!
    email: String!
    token: String!
    password: String!
  }

  type Post {
    id: ID!
    body: String!
    createdAt: String!
    username: String!
    groupName: String!
    comments: [Comment]!
    likes: [Like]!
    likeCount: Int!
    group: Group!
    commentCount: Int!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Like {
    id: ID!
    createdAt: String!
    username: String!
  }

  #Inputs
  input RegisterInput {
    name: String!
    email: String!
    password: String!
    confirmPassword: String!
  }

  input CreatePostInput {
    body: String!
    groupName: String!
  }

  input LoginInput {
    emailOrName: String!
    password: String!
  }
  input CreateGroupInput {
    name: String!
    description: String
    type: String!
  }

  #Queries
  type Query {
    getAllUsers: [User!]!
    getUser(name: String!): User!
    getAllPosts: [Post]
    getPost(postId: ID!): Post
    getPostsInGroup(groupName: String!): [Post]
  }
  #Mutation
  type Mutation {
    #Auth
    register(registerInput: RegisterInput): User!
    login(loginInput: LoginInput): User!
    addAdmins(adminNames: [String]): Group!

    #Create defs
    createGroup(createGroupInput: CreateGroupInput): Group!
    createPost(createPostInput: CreatePostInput): Post!
    createComment(postId: ID!, body: String!): Post!

    #Delete defs
    deletePost(postId: ID!): String!
    deleteComment(postId: ID!, commentId: ID!): Post!

    #Other
    likePost(postId: ID!): Post!
  }
`;

import { query } from "./mainQuery";
import { mutation } from "./mainMutation";

export const resolvers = {
  Post: {
    likeCount: (parent) => parent.likes.length,
    commentCount: (parent) => parent.comments.length,
  },
  Group: {
    adminCount: (parent) => parent.admins.length,
  },
  Query: {
    ...query.Query,
  },
  Mutation: {
    ...mutation.Mutation,
  },
};

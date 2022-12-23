import { userQuery } from "./queries/userQueries";
import { postsQuery } from "./queries/postQueries";

export const query = {
  Query: {
    ...userQuery.Query,
    ...postsQuery.Query,
  },
};

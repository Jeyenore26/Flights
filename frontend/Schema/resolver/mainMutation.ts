import { authenticationMutation } from "./mutations/authMutation";
import { groupMutation } from "./mutations/groupMutation";
import { postMutation } from "./mutations/postsMutation";
import { commentMutation } from "./mutations/commentsMutation";

export const mutation = {
  Mutation: {
    ...authenticationMutation.Mutation,
    ...groupMutation.Mutation,
    ...postMutation.Mutation,
    ...commentMutation.Mutation,
  },
};

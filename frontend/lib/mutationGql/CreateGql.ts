import { gql } from "@apollo/client";

export const createGroupMutation = gql`
  mutation Mutation($createGroupInput: CreateGroupInput) {
    createGroup(createGroupInput: $createGroupInput) {
      name
    }
  }
`;

import { gql } from "apollo-server-micro";

export const groupsQuery = gql`
  query Query {
    getAllGroups {
      name
      description
      workplace
      memberCount
    }
  }
`;

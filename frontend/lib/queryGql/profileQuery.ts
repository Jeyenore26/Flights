import { gql } from "@apollo/client";

export const UserQuery = gql`
  query getUser {
    getUser {
      name
      email
      memberOf
      phone
      role
    }
  }
`;

import { gql } from "@apollo/client";

export const scheduleQuery = gql`
  query scheduleQuery {
    getScheduleInGroup {
      title
      attendCount
      place
      selectedDate
      body
    }
  }
`;
export const postQuery = gql`
  query postQuery {
    getPostsInGroup {
      id
      body
      createdAt
      username
      likeCount
      user {
        role
      }
    }
  }
`;
export const getGroup = gql`
  query getGroup {
    getGroup {
      owner {
        name
        role
      }
      members {
        name
        role
      }
      admins {
        name
        role
      }
    }
  }
`;

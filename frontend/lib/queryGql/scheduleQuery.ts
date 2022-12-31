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
      liked
      user {
        role
      }
    }
  }
`;
export const getGroup = gql`
  query getGroup {
    getGroup {
      admins {
        name
      }
      members {
        name
      }
      owner {
        name
        role
      }
      registerduser {
        name
        role
      }
    }
  }
`;

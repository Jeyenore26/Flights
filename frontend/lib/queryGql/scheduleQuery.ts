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
        photoLink
      }
      members {
        name
        photoLink
      }
      owner {
        name
        role
        photoLink
      }
      registerduser {
        name
        role
      }
    }
  }
`;

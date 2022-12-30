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
      body
      createdAt
      username
      likeCount
    }
  }
`;

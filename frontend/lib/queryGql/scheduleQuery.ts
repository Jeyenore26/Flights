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

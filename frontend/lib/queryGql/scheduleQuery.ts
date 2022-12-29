import { gql } from "@apollo/client";

export const scheduleQuery = gql`
  query scheduleQuery {
    getScheduleInGroup   {
      attendCount
      place
      selectedDate
      body
    }
  }
`;

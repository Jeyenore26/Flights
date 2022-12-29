import { gql } from "@apollo/client";

export const createGroupMutation = gql`
  mutation Mutation($createGroupInput: CreateGroupInput) {
    createGroup(createGroupInput: $createGroupInput) {
      name
    }
  }
`;

export const createScheduleMutation = gql`
  mutation Mutation($createScheduleInput: CreateScheduleInput) {
    createSchedule(createScheduleInput: $createScheduleInput) {
      ownerName
    }
  }
`;

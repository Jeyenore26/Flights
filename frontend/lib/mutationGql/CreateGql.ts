import { gql } from "@apollo/client";

export const createGroupMutation = gql`
  mutation Mutation($createGroupInput: CreateGroupInput) {
    createGroup(createGroupInput: $createGroupInput) {
      name
    }
  }
`;

export const createScheduleMutation = gql`
  mutation createSchedule($createScheduleInput: CreateScheduleInput) {
    createSchedule(createScheduleInput: $createScheduleInput) {
      ownerName
    }
  }
`;
export const createPostMutation = gql`
  mutation Mutation($body: String) {
    createPost(body: $body) {
      groupName
    }
  }
`;

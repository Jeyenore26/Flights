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

export const joinGroupMutation = gql`
  mutation joinGroup($groupName: String) {
    joinGroup(groupName: $groupName) {
      name
    }
  }
`;

export const addLikeMutation = gql`
  mutation likePost($postId: String!) {
    likePost(postId: $postId) {
      likeCount
    }
  }
`;
export const PromoteMutation = gql`
  mutation addadmin($adminName: String) {
    addAdmin(adminName: $adminName) {
      members {
        name
      }
    }
  }
`;
export const DemoteMutation = gql`
  mutation removeAdmin($adminName: String) {
    removeAdmin(adminName: $adminName) {
      admins {
        name
      }
    }
  }
`;

export const kickMutation = gql`
  mutation kickMember($memberName: String) {
    kickMember(memberName: $memberName) {
      members {
        name
      }
    }
  }
`;
export const addGroupImageMutation = gql`
  mutation Mutation($addGroupImageInput: AddGroupImageInput) {
    addGroupImage(addGroupImageInput: $addGroupImageInput) {
      name
    }
  }
`;
export const addProfileImageMutation = gql`
  mutation Mutation($imageLink: String!) {
    uploadPhoto(imageLink: $imageLink) {
      name
    }
  }
`;

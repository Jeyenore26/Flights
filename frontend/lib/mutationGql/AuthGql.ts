import { gql } from "@apollo/client";
export const registerMutation = gql`
  mutation Register($registerInput: RegisterInput) {
    register(registerInput: $registerInput) {
      token
    }
  }
`;

export const loginMutation = gql`
  mutation Login($loginInput: LoginInput) {
    login(loginInput: $loginInput) {
      token
    }
  }
`;

export const updateProfileMutation = gql`
  mutation updateProfile($updateProfileInput: UpdateProfileInput) {
    updateProfile(updateProfileInput: $updateProfileInput) {
      token
    }
  }
`;

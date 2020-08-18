import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  subscription {
    messages {
      id
      content
      user
    }
  }
`;

export const POST_MESSAGES = gql`
  mutation($user: String!, $content: String!) {
    postMessage(user: $user, content: $content)
  }
`;

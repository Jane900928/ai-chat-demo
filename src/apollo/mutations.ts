import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation SendMessage($input: SendMessageInput!) {
    sendMessage(input: $input) {
      id
      message
    }
  }
`;

export const SEND_MESSAGE_INPUT = gql`
  input SendMessageInput {
    message: String!
    conversationId: String
  }
`;
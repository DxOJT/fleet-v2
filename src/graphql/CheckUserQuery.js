import { gql } from "@apollo/client";
export const GET_USER = gql`
  query GetUser {
    user {
      id
      employee_id
      email
    }
  }
`;

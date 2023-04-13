import { gql } from "@apollo/client";

export const CREATE_USER_ACC = gql`
  mutation MyMutation(
    $email: String = ""
    $employee_id: String = ""
    $password: String = ""
    $role: String = ""
  ) {
    createUser(
      email: $email
      password: $password
      role: $role
      employee_id: $employee_id
    ) {
      email
      password
    }
  }
`;

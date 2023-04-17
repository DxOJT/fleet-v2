import { gql } from "@apollo/client";

export const update_user = {
  UPDATE_USER: gql`
    mutation UpdateUser($set: user_set_input, $id: uuid!) {
      update_user_by_pk(pk_columns: { id: $id }, _set: $set) {
        email
        password
        employee_id
        id
        role
      }
    }
  `,
};

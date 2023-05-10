import { gql } from "@apollo/client";

export const add_employee = {
  ADD_EMPLOYEE: gql`
    mutation InsertEmployee(
      $licence_expiration: timestamptz
      $civil_status: String
      $email: String
      $first_name: String
      $height: String
      $last_name: String
      $licence_number: String
      $middle_name: String
      $mobile_no: String
      $profile_pic: String
      $religion: String
      $telephone: String
      $weight: String
      $employee_type: String
      $gender: String
    ) {
      insert_employee(
        objects: {
          licence_expiration: $licence_expiration
          civil_status: $civil_status
          email: $email
          first_name: $first_name
          height: $height
          last_name: $last_name
          licence_number: $licence_number
          middle_name: $middle_name
          mobile_no: $mobile_no
          profile_pic: $profile_pic
          religion: $religion
          telephone: $telephone
          weight: $weight
          employee_type: $employee_type
          gender: $gender
        }
      ) {
        affected_rows
        returning {
          licence_expiration
          civil_status
          email
          first_name
          height
          last_name
          licence_number
          middle_name
          mobile_no
          profile_pic
          religion
          telephone
          weight
          id
          employee_type
          gender
        }
      }
    }
  `,
};

export const update_employee = {
  UPDATE_EMPLOYEE: gql`
    mutation UpdateEmployee($set: employee_set_input, $id: uuid!) {
      update_employee_by_pk(pk_columns: { id: $id }, _set: $set) {
        civil_status
        email
        employee_type
        first_name
        gender
        height
        id
        last_name
        licence_expiration
        licence_number
        middle_name
        mobile_no
        profile_pic
        religion
        telephone
        weight
      }
    }
  `,
};
export const ADD_EMPLOYEE = gql`
  mutation InsertEmployee(
    $licence_expiration: timestamptz
    $civil_status: String
    $email: String
    $first_name: String
    $height: String
    $last_name: String
    $licence_number: String
    $middle_name: String
    $mobile_no: String
    $profile_pic: String
    $religion: String
    $telephone: String
    $weight: String
    $employee_type: String
    $gender: String
    $licence_attachment: String
  ) {
    insert_employee(
      objects: {
        licence_expiration: $licence_expiration
        civil_status: $civil_status
        email: $email
        first_name: $first_name
        height: $height
        last_name: $last_name
        licence_number: $licence_number
        middle_name: $middle_name
        mobile_no: $mobile_no
        profile_pic: $profile_pic
        religion: $religion
        telephone: $telephone
        weight: $weight
        employee_type: $employee_type
        gender: $gender
        licence_attachment: $licence_attachment
      }
    ) {
      affected_rows
      returning {
        licence_expiration
        civil_status
        email
        first_name
        height
        last_name
        licence_number
        middle_name
        mobile_no
        profile_pic
        religion
        telephone
        weight
        id
        employee_type
        gender
        licence_attachment
      }
    }
  }
`;

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
    }
  }
`;

export const update_user = {
  UPDATE_USER: gql`
    mutation updateUser($set: user_set_input, $id: uuid!) {
      updateUser(id: { id: $id }, _set: $set) {
        email
        password
        employee_id
        id
      }
    }
  `,
};

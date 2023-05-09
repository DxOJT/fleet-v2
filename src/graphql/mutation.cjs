import { gql } from "@apollo/client";

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

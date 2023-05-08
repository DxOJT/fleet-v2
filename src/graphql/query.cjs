import { gql } from "@apollo/client";

export const GET_EMPLOYEES = gql`
  query getEpmloyees(
    $where: employee_bool_exp
    $orderBy: [employee_order_by!]
    $limit: Int
    $offset: Int
  ) {
    employee(
      order_by: $orderBy
      where: $where
      limit: $limit
      offset: $offset
    ) {
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
      religion
      telephone
      weight
      employee_companies {
        company {
          name
        }
      }
    }
    employee_aggregate(where: $where) {
      aggregate {
        count
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser {
    user {
      id
      employee_id
      email
    }
  }
`;

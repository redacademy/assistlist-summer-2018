import gql from 'graphql-tag';

export const SIGNUP_USER = gql`
  mutation SignupUser($email: String!, $username: String!, $password: String!) {
    signupUser(email: $email, username: $username, password: $password) {
      id
      token
    }
  }
`;
export const AUTH_USER = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

export const GET_ITEMS = gql`
  query($filter: ItemFilter) {
    allItems(filter: $filter) {
      title
      id
      createdAt
      price
      location {
        title
      }
      subCategory {
        title
      }
      user {
        id
        username
      }
      images {
        data
      }
    }
  }
`;

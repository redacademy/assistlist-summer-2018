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
  query($filter: ItemFilter, $order: ItemOrderBy) {
    allItems(filter: $filter, orderBy: $order) {
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
      postStatus
    }
  }
`;

export const USER_ITEMS = gql`
  query($id: ID!) {
    allItems(filter: { user: { id: $id } }) {
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
      postStatus
    }
  }
`;

export const ITEM_STATUS = gql`
  mutation($id: ID!, $date: DateTime) {
    updateItem(id: $id, postStatus: $date) {
      id
    }
  }
`;

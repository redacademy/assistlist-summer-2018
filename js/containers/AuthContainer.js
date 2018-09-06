import { adopt } from 'react-adopt';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';

const SIGNUP_USER = gql`
  mutation SignupUser($email: String!, $username: String!, $password: String!) {
    signupUser(email: $email, username: $username, password: $password) {
      id
      token
    }
  }
`;
const AUTH_USER = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      id
      token
    }
  }
`;

const signup = ({ render }) => (
  <Mutation mutation={SIGNUP_USER}>
    {(mutation, { data, error, loading }) =>
      render({ mutation, data, error, loading })
    }
  </Mutation>
);
const login = ({ render }) => (
  <Mutation mutation={AUTH_USER}>
    {(mutation, { data, error, loading }) => 
      render({ mutation, data, error, loading })
    }
  </Mutation>
);

const AuthContainer = adopt({
  signup,
  login,
});

export default AuthContainer;

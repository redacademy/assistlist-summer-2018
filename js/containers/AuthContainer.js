import React from 'react';
import { adopt } from 'react-adopt';
import { Mutation } from 'react-apollo';
import { AUTH_USER, SIGNUP_USER } from '../config/queries'

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

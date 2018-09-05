import React, { Fragment } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Form, Field } from 'react-final-form';
import { AccountInput } from '../../components/AccountInput/AccountInput';

const Login = () => {
  return (
    <Form
      onSubmit={values => console.log(values)}
      render={({ handleSubmit, pristine, values }) => (
        <Fragment>
          <Field name="email">
            {({ input, meta }) => <AccountInput input={input} name="Email" />}
          </Field>
          <Field>
            {({ input, meta }) => (
              <TouchableOpacity onPress={handleSubmit}>
                <Text>Submit</Text>
              </TouchableOpacity>
            )}
          </Field>
        </Fragment>
      )}
    />
  );
};

export default Login;

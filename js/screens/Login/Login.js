import React, { Fragment } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Form, Field } from 'react-final-form';

const Login = () => {
  return (
    <Form
      onSubmit={values => console.log(values)}
      render={({ handleSubmit, pristine, values }) => (
        <Fragment>
          <Field name="test">
            {({ input, meta }) => (
              <Fragment>
                <TextInput style={{ width: 200, backgroundColor: 'grey' }} {...input}/>
                {console.log(input)}
              </Fragment>
            )}
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

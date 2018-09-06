import React, { Fragment } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Form, Field } from 'react-final-form';
import AccountInput from '../../components/AccountInput';
import Button from '../../components/Button';
import styles from './styles';

const Login = ({ formState, toggleForm }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/Logo/Name-Logo.png')}
      />
      <View>
        <Form
          onSubmit={() => {}}
          render={({ handleSubmit }) => (
            <Fragment>
              <Field name="email">
                {({ input }) => (
                  <AccountInput input={input} placeholder="Email" />
                )}
              </Field>
              {formState ? (
                <Field name="username">
                  {({ input }) => (
                    <AccountInput input={input} placeholder="Username" />
                  )}
                </Field>
              ) : null}
              <Field name="password">
                {({ input }) => (
                  <AccountInput input={input} placeholder="Password" password />
                )}
              </Field>
              {formState ? (
                <Field name="verifyPassword">
                  {({ input }) => (
                    <AccountInput
                      input={input}
                      placeholder="Re-enter Password"
                      password
                    />
                  )}
                </Field>
              ) : (
                <Text style={styles.text}>
                  Forgot Password?
                </Text>
              )}
              <View style={styles.button}>
                {formState ? (
                  <Button onPress={handleSubmit} name="Next" color="green" />
                ) : (
                  <Button onPress={handleSubmit} name="Sign In" color="green" />
                )}
              </View>
            </Fragment>
          )}
        />
      </View>
      {!formState ? (
        <View style={styles.footer}>
          <Text style={styles.text}>Don't have an account?</Text>
          <View style={styles.actions}>
            <TouchableOpacity onPress={toggleForm}>
              <Text style={[styles.text, styles.link]}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.text}> or </Text>
            <TouchableOpacity>
              <Text style={[styles.text, styles.link]}>Skip</Text>
            </TouchableOpacity>
            <Text style={styles.text}> for now</Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default Login;

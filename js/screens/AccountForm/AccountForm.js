import React, { Fragment } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { Form, Field } from 'react-final-form';
import AccountInput from '../../components/AccountInput';
import Button from '../../components/Button';
import styles from './styles';
import { validateLogin, validateSignup } from './helpers/validation';
import { colors } from '../../config/styles';

const AccountForm = ({ formState, toggleForm, signup, login, navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/Logo/Name-Logo.png')}
      />
      {(login.loading || signup.loading) && (
        <ActivityIndicator size="large" color={colors.lightBlue} />
      )}
      <View>
        <Form
          onSubmit={
            formState
              ? values => {
                  signup
                    .mutation({ variables: { ...values } })
                    .then(res => {
                      console.log(res);
                    })
                    .then(() => navigation.navigate('Listings'))
                    .catch(err => {
                      console.log(err);
                    });
                }
              : values => {
                  login
                    .mutation({ variables: { ...values } })
                    .then(res => {
                      console.log(res);
                    })
                    .then(() => navigation.navigate('Listings'))
                    .catch(err => {
                      console.log(err);
                    });
                }
          }
          validate={formState ? validateSignup : validateLogin}
          render={({ handleSubmit }) => (
            <Fragment>
              <Field name="email">
                {({ input, meta }) => (
                  <Fragment>
                    <AccountInput
                      input={input}
                      placeholder={(meta.touched && meta.error) || 'Email'}
                      invalid={meta.touched && meta.error}
                    />
                  </Fragment>
                )}
              </Field>
              {formState ? (
                <Field name="username">
                  {({ input, meta }) => (
                    <Fragment>
                      <AccountInput
                        input={input}
                        placeholder={(meta.touched && meta.error) || 'Username'}
                        invalid={meta.touched && meta.error}
                      />
                    </Fragment>
                  )}
                </Field>
              ) : null}
              <Field name="password">
                {({ input, meta }) => (
                  <Fragment>
                    <AccountInput
                      input={input}
                      placeholder={(meta.touched && meta.error) || 'Password'}
                      invalid={meta.touched && meta.error}
                      password
                    />
                  </Fragment>
                )}
              </Field>
              {formState ? (
                <Fragment>
                  <Field name="verifyPassword">
                    {({ input, meta }) => (
                      <Fragment>
                        <AccountInput
                          input={input}
                          placeholder={
                            (meta.touched && meta.error) || 'Re-enter Password'
                          }
                          invalid={meta.touched && meta.error}
                          password
                        />
                        {meta.error &&
                          meta.touched && (
                            <Text style={[styles.error, styles.signupError]}>
                              {meta.error}
                            </Text>
                          )}
                      </Fragment>
                    )}
                  </Field>
                  {signup.error && (
                    <Text style={[styles.error, styles.signupError]}>
                      {signup.error.graphQLErrors[0].functionError}
                    </Text>
                  )}
                </Fragment>
              ) : (
                <Fragment>
                  {login.error && (
                    <Text style={[styles.error, styles.loginError]}>
                      {login.error.graphQLErrors[0].functionError}
                    </Text>
                  )}
                  <Text style={styles.text}>Forgot Password?</Text>
                </Fragment>
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

export default AccountForm;

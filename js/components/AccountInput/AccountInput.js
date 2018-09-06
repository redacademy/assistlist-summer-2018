import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

export const AccountInput = ({ input, placeholder, password }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#0082B580"
      {...input}
      secureTextEntry={password}
    />
  );
};

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export const Button = ({ onPress, name, color }) => {

  return (
    <TouchableOpacity style={[styles.button, styles[color]]} onPress={onPress}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

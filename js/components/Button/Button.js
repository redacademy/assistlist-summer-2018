import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export default (Button = ({ onPress, name, color, size }) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[color], styles[size || 'big']]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, styles[`${size || 'big'}ButtonText`]]}>
        {name}
      </Text>
    </TouchableOpacity>
  );
});

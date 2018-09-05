import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

export const Button = ({ onPress, name, color }) => {
  const buttonColor = () => {
    switch (color) {
      case 'darkBlue':
        return styles.darkBlue;
      case 'lightBlue':
        return styles.lightBlue;
      case 'green':
        return styles.green;
      default:
        return styles.grey;
    }
  };

  return (
    <TouchableOpacity style={[styles.button, buttonColor()]} onPress={onPress}>
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

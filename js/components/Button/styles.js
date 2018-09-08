import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../config/styles';

const styles = StyleSheet.create({
  huge: {
    width: 290,
    height: 76,
    paddingVertical: 25,
  },
  big: {
    width: 200,
    paddingVertical: 5,
  },
  medium: {
    width: 129,
    paddingVertical: 8,
  },
  small: {
    width: 92,
    paddingVertical: 6,
  },
  tiny: {
    width: 63,
    paddingVertical: 3,
  },
  button: {
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: fonts.main,
    textAlign: 'center',
    color: 'white',
  },
  hugeButtonText: {
    fontSize: 23,
  },
  bigButtonText: {
    fontSize: 25,
  },
  mediumButtonText: {
    fontSize: 17,
  },
  smallButtonText: {
    fontSize: 14,
  },
  tinyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  darkBlue: {
    backgroundColor: colors.darkBlue,
  },
  lightBlue: {
    backgroundColor: colors.lightBlue,
  },
  green: {
    backgroundColor: colors.green,
  },
  grey: {
    backgroundColor: colors.grey,
  },
});

export default styles;

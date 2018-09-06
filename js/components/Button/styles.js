import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../config/styles'

const styles = StyleSheet.create({
  button: {
    width: 200,
    color: 'white',
    paddingVertical: 5,
    borderRadius: 6,
  },
  buttonText: {
    fontFamily: fonts.main,
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
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
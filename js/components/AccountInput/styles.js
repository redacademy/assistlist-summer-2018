import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../config/styles';

const styles = StyleSheet.create({
  input: {
    fontFamily: fonts.main,
    width: 200,
    borderBottomWidth: 2,
    paddingHorizontal: 2,
    paddingVertical: 1,
    fontSize: 16,
    marginTop: 8,
    marginBottom: 20,
  },
  valid: {
    borderBottomColor: colors.darkBlue,
    color: colors.lightBlue,
  },
  invalid: {
    borderBottomColor: colors.red,
  },
});

export default styles;

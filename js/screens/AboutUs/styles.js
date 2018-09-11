import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 21,
    paddingRight: 18
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.darkBlue,
    fontFamily: fonts.main,
    paddingVertical: 10,

  },
  desc: {
    fontSize: 14,
    color: colors.darkBlue,
    borderColor: colors.darkBlue,
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderRadius: 5,
    textAlign: 'left',
    fontFamily: fonts.main,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
});

export default styles;

import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  icon: {
    height: height / 15,
    width: width / 8,
    padding: 7,
    marginBottom: 10,
  },
  container: {
    backgroundColor: 'white',
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderRadius: 7,
    position: 'absolute',
    justifyContent: 'center',
    bottom: 30,
    width: width / 1.1,
    margin: 'auto',
  },
  option: {
    borderColor: colors.darkBlue,
    borderBottomWidth: 1,
  },
  optionText: {
    color: colors.darkBlue,
    fontFamily: fonts.main,
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5,
    textAlign: 'center',
  },
});

export default styles;

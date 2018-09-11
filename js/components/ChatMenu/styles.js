import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  headerOption: {
    width: width / 10,
    height: height / 100,
    margin: 10,
  },
  container: {
    position: 'absolute',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    margin: 'auto',
  },
  SafetyTips: {
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    backgroundColor: '#fff',
    width: width / 1.25,
  },
  Delete: {
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    backgroundColor: '#fff',
    width: width / 1.25,
  },
  Cancel: {
    marginTop: 10,
    color: colors.darkBlue,
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#fff',
    width: width / 1.25,
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

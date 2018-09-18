import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  icon: {
    height: height / 15,
    width: width / 8,
    padding: 7,
    marginBottom: 10,
    overflow: 'visible'
  },
  container: {
    backgroundColor: 'white',
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderRadius: 7,
    position: 'absolute',
    justifyContent: 'center',
    bottom: 30,
    width: width / 1.3,
    marginLeft: width / 15,
    marginRight: width / 15,
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
    paddingLeft: width / 13,
    padding: height / 70,
    textAlign: 'left',
  },
});

export default styles;

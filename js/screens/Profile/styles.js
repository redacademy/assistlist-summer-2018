import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
  },
  profileHeader: {
    alignItems: 'center',
    borderBottomColor: colors.darkBlue,
    borderBottomWidth: 0.5,
    paddingTop: height * 0.05,
    paddingBottom: height * 0.05,
  },
  linkText: {
    marginTop: 10,
    color: colors.lightBlue,
    fontFamily: fonts.main,
    fontSize: 24,
  },
  icon: {
    height: width * 0.19,
    width: width * 0.19,
    overflow: 'visible',
  },
  linkGrid: {
    paddingTop: height * 0.02,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridItem: {
    alignItems: 'center',
    width: width * 0.5,
    marginTop: 20,
  },
  gridText: {
    marginTop: 15,
    fontFamily: fonts.main,
  },
  editText: {
    fontFamily: fonts.main,
  },
});

export default styles;

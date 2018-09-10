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
    paddingVertical: 20,
  },
  linkText: {
    marginTop: 10,
    color: colors.darkBlue,
    fontFamily: fonts.main,
    fontSize: 24,
    fontWeight: 'bold',
  },
  editText: {
    marginTop: 5,
    fontFamily: fonts.main,
  },
  icon: {
    height: 60,
    width: 60,
    overflow: 'visible',
  },
  linkGrid: {
    paddingTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridItem: {
    alignItems: 'center',
    width: width * 0.5,
    marginTop: 25,
  },
  gridText: {
    marginTop: 15,
    fontFamily: fonts.main,
  },
});

export default styles;

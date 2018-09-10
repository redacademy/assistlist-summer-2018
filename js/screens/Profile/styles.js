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
    paddingVertical: 15,
  },
  userIcon: {
    height: height / 5,
    width: width / 5,
    overflow: 'visible',
  },
  linkText: {
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
    height: height / 6,
    width: width / 6,
    resizeMode: 'contain',
  },
  linkGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    flexGrow: 1,
    alignItems: 'center',
    width: width / 2,
  },
  gridText: {
    marginBottom: 20,
    fontFamily: fonts.main,
  },
});

export default styles;

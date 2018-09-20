import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
  },
  profileHeader: {
    flex: 0.6,
    alignItems: 'center',
    borderBottomColor: colors.darkBlue,
    borderBottomWidth: 0.5,
  },
  userIcon: {
    height: height / 5,
    width: height / 5,
    borderRadius: height / 10,
    overflow: 'hidden',
  },
  editText: {
    marginTop: 5,
    fontFamily: fonts.main,
    alignSelf: 'center',
  },
  usernameText: {
    color: colors.darkBlue,
    fontFamily: fonts.main,
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 5,
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
    marginBottom: 10,
    fontFamily: fonts.main,
  },
});

export default styles;

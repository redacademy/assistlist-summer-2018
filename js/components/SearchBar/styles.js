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
    top: height / 6.1,
    width: width / 1.1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  searchIcon: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    left: 20,
    height: height / 14.5,
    width: width / 18,
    resizeMode: 'contain',
  },
  searchInput: {
    position: 'relative',
    borderColor: 'blue',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.darkBlue,
    fontFamily: fonts.main,
    color: colors.darkBlue,
    marginTop: 5,
    marginHorizontal: 10,
    paddingHorizontal: width / 8,
    paddingVertical: 8,
    width: width / 1.3,
  },
  arrow: {
    height: height / 35,
    width: width / 20,
    position: 'absolute',
    right: 0,
    margin: 10,
  },
  option: {
    borderColor: colors.darkBlue,
    borderBottomWidth: 1,
    flexDirection: 'row',
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

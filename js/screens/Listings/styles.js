import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  searchInput: {
    position: 'relative',
    borderColor: 'blue',
    borderRadius: 10,
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
  searchIcon: {
    position: 'absolute',
    top: 11,
    left: 20,
    height: 20,
    width: 20,
  },
  filterIcon: {
    height: width / 11,
    width: width / 11,
    marginLeft: 5,
  },
});

export default styles;

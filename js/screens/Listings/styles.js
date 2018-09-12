import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
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
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: colors.darkBlue,
    fontFamily: fonts.main,
    color: colors.darkBlue,
    marginTop: 5,
    marginHorizontal: 10,
    paddingHorizontal: width / 8,
    paddingVertical: 5,
    width: width / 1.3,
  },
  searchIcon: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    left: 20,
    height: height / 20,
    width: width / 18,
    resizeMode: 'contain',
  },
  filterIcon: {
    height: width / 15,
    width: width / 10,
    marginLeft: 6,
  },
});

export default styles;

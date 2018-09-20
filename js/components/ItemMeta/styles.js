import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    flexGrow: 1,
    height: height / 3,
    resizeMode: 'contain',
  },
  imageBorder: {
    maxHeight: height / 3,
    borderColor: colors.darkBlue,
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: 15,
  },
  title: {
    fontFamily: fonts.main,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    alignSelf: 'center',
  },
  priceLocationContainer: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    color: colors.darkBlue,
    fontSize: 20,
    fontWeight: '700',
    fontFamily: fonts.main,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  locationIcon: {
    height: 15,
    width: 10,
    marginRight: 5,
  },
  location: {
    color: colors.grey,
    fontSize: 16,
    fontFamily: fonts.main,
  },
});

export default styles;

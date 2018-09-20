import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
    paddingHorizontal: width / 8,
  },
  image: {
    flex: 0.8,
    resizeMode: 'contain',
  },
  imageBoarder: {
    height: height / 3,
    justifyContent: 'center',
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
  description: {
    marginBottom: 15,
    fontFamily: fonts.main,
    color: colors.greyText,
    fontSize: 16,
  },
  contactButton: {
    backgroundColor: colors.green,
    textAlign: 'center',
    alignSelf: 'center',
    padding: 5,
    paddingHorizontal: width / 8,
    borderRadius: 7,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontFamily: fonts.main,
  },
});

export default styles;

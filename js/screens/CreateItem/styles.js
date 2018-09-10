import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  message: {
    fontFamily: fonts.main,
    fontSize: 14,
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 27,
  },
  title: {
    paddingBottom: 10,
    paddingTop: 10,
    fontSize: 17,
  },
  textArea: {
    height: 100,
    justifyContent: 'flex-start',
    fontSize: 16,
    paddingTop: 8,
    paddingHorizontal: 10,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  input: {
    fontSize: 16,
    paddingTop: 8,
    paddingHorizontal: 10,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  inputPrice: {
    fontSize: 16,
    paddingTop: 8,
    paddingHorizontal: 10,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
    width: width / 2.5,
    flexDirection: 'row',
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  freeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 18,
    paddingTop: 18,
  },
  TextFree: {
    marginRight: 10,
    marginTop: 5,
    fontSize: 18,
  },
  confirmButton: {
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    paddingVertical: 5,
    borderRadius: 7,
    alignItems: 'center',
    backgroundColor: colors.green,
    width: width/1.5,
  },
  buttonText: {
    fontFamily: fonts.main,
    color: 'white',
    fontSize: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 15,
  },
  dollarSign: {
    fontSize: 16,
    marginRight: 20,
  },
  dollarText: {
    marginRight: 3,
    paddingLeft: 5,
    width:  width / 5,
  }
});

export default styles;

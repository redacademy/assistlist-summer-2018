import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles'  

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex: 0.55,
    resizeMode: 'contain',
    marginBottom: 20
  },
  text: {
    fontFamily: fonts.main,
    color: colors.darkBlue,
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  link: {
    fontWeight: '700',
    textDecorationLine: 'underline'
  },
  actions: {
    flexDirection: 'row',
  },
  footer: {
    paddingVertical: 30,
  },
  button: {
    marginTop: 20,
    paddingVertical: 5,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
  },
  buttonText: {
    fontFamily: fonts.main,
    color: 'white',
    fontSize: 25,
  },
  error: {
    fontFamily: fonts.main,
    color: colors.red,
  },
  form: {
    marginTop: 30,
  },
});

export default styles;
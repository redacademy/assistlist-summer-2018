import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles'  

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  logo: {
    width: 276,
    height: 171,
    marginTop: 84,
    marginBottom: 60,
  },
  text: {
    fontFamily: fonts.main,
    color: colors.darkBlue,
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  link: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  actions: {
    marginLeft: -5,
    flexDirection: 'row',
  },
  footer: {
    paddingVertical: 30,
  },
  button: {
    marginTop: 20,
  },
  error: {
    position: 'absolute',
    fontFamily: fonts.main,
    color: colors.red,
  },
  loginError: {
    top: 90,
  },
  signupError: {
    top: 193,
  }
});

export default styles;
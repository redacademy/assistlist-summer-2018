import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles'  

const {height, width} = Dimensions.get('window');
console.log(height, width)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    maxWidth: width * 0.733,
    maxHeight: height * 0.256,
    marginBottom: 60,
    overflow: 'visible',
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
    flexDirection: 'row',
  },
  footer: {
    paddingVertical: 30,
  },
  button: {
    marginTop: 20,
  },
  error: {
    fontFamily: fonts.main,
    color: colors.red,
  },
});

export default styles;
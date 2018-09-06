import { StyleSheet, Dimensions } from 'react-native';
import { fonts } from '../../config/styles'  

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
    color: '#0082B5',
    fontSize: 16,
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
  }
});

export default styles;
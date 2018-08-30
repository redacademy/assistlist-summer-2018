import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
import { fonts } from '../../config/styles';

const styles = StyleSheet.create({
  images: {
    height: height * 0.29,
    width: width * 0.55,
  },
  text: {
    color: '#0072A0',
    marginTop: -90,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'left',
    fontFamily: fonts.main,
  },
  lastImage: {
    height: height * 0.29,
    width: width * 0.55,
    position: 'relative',
    marginTop: 10,
  },
});

export default styles;

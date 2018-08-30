import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';

const { width, height } = Dimensions.get('window');
const halfWidth = width * .55
const styles = StyleSheet.create({
  images: {
    height: height * 0.30,
    width: halfWidth,
  },
  text: {
    color: colors.darkBlue,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: 'left',
    fontFamily: fonts.main,
    margin: 0

  },
  lastImage: {
    height: height * 0.29,
    width: width * 0.55,
    position: 'relative',
    marginTop: 10,
  },
});

export default styles;

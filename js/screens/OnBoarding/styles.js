import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  firstStepImage: {
    resizeMode: 'contain',
    height: height / 1.45,
    width: width / 1.55,
    marginTop: 20,
  },
  otherStepImages: {
    resizeMode: 'contain',
    height: height / 1.45,
    width: width / 2,
    marginTop: 20,
    paddingTop: 20,
  },
  firstsecondStepText: {
    flex: .5,
    color: colors.darkBlue,
    textAlign: 'center',
    fontFamily: fonts.main,
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 20
  },
  lastText: {
    flex: .5,
    color: colors.darkBlue,
    textAlign: 'left',
    fontFamily: fonts.main,
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 20,
    marginRight: 20,
    paddingHorizontal: 20
  },
  ImageContainer: {
    flex: .5,
    marginTop: 20,
  },
});

export default styles;
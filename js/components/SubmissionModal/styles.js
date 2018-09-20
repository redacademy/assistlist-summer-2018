import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  icon: {
    width: width / 20,
    height: height / 20,
    margin: 10,
  },
  body: {
    position: 'absolute',
    bottom: 0,
    left: -width / 20,
    right: 0,
    top: 0,
    height: height,
    width: width,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: height / 3,
    width: width / 1.01,
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: '#fff',
    margin: 'auto',
    paddingHorizontal: width / 13,
    paddingBottom: height / 20,
    position: 'absolute',
    top: 0,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  Text: {
    marginTop: height / 20,
    fontFamily: fonts.main,
    color: colors.grey,
    fontSize: 20,
    paddingRight: width / 20,
  },
  yes: {
    marginTop: height / 11,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
    width: width / 2.5,
    padding: 5,
    marginRight: 5,
  },
  no: {
    marginTop: height / 11,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
    width: width / 2.5,
    padding: 5,
    marginLeft: 5,
  },
  yesText: {
    paddingVertical: 5,
    borderRadius: 7,
    fontFamily: fonts.main,
    color: 'white',
    fontSize: 20,
  },
  noText: {
    paddingVertical: 5,
    borderRadius: 7,
    fontFamily: fonts.main,
    color: 'white',
    fontSize: 20,
  },
});

export default styles;

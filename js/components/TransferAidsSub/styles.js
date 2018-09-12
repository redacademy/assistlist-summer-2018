import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  icon: {
    height: height / 15,
    width: width / 8,
    padding: 7,
    marginBottom: 10,
  },
  container: {
    backgroundColor: 'white',
    borderColor: colors.darkBlue,
    borderWidth: 1,
    borderRadius: 7,
    position: 'absolute',
    justifyContent: 'center',
    top: height / 5.2,
    width: width / 1.1,
    marginLeft: width / 20,
    marginRight: width / 20,
  },
  modalClose: {
    marginTop: height / 7.4,
    height: height / 22,
    width: width / 6,
    position: 'absolute',
    marginHorizontal: width / 50,
    right: 0,
    zIndex: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
  },
  closeButton: {
    paddingVertical: 5,
    color: colors.darkBlue,
    fontFamily: fonts.main,
    fontSize: 15,
  },
  option: {
    borderColor: colors.darkBlue,
    borderBottomWidth: 1,
  },
  optionText: {
    color: colors.darkBlue,
    fontFamily: fonts.main,
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: width / 13,
    padding: height / 70,
    textAlign: 'left',
  },
});

export default styles;

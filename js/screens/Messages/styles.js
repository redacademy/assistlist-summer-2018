import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    backgroundColor: 'white',
  },
  singleChat: {
    height: height / 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomColor: colors.darkBlue,
    borderBottomWidth: 0.5,
  },
  listImage: {
    resizeMode: 'contain',
    alignSelf: 'stretch',
    flex: 0.35,
    marginLeft: width / 12,
  },
  textArea: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: width / 7,
    marginTop: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontFamily: fonts.main,
    color: '#515151',
    fontSize: 18,
    fontWeight: '700',
    paddingBottom: 10,
  },
  lastMessage: {
    fontFamily: fonts.main,
    fontSize: 14,
    color: colors.darkBlue,
  },
});

export default styles;

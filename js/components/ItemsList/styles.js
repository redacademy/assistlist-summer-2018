import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: 'white',
  },
  listItem: {
    borderBottomColor: colors.darkBlue,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    maxHeight: height / 5,
  },
  listImage: {
    resizeMode: 'contain',
    alignSelf: 'stretch',
    flex: 0.35,
    marginLeft: width / 12,
  },
  listText: {
    flex: 1,
    marginLeft: width / 7,
  },
  listTitle: {
    fontFamily: fonts.main,
    fontSize: 18,
    fontWeight: '700',
    color: '#515151',
  },
  listPrice: {
    marginTop: 7,
    color: colors.darkBlue,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: fonts.main,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 13,
  },
  listLocationText: {
    color: colors.grey,
    fontSize: 16,
    fontFamily: fonts.main,
  },
  listLocationIcon: {
    height: 15,
    width: 10,
    marginRight: 5,
    overflow: 'visible',
  },
});

export default styles;

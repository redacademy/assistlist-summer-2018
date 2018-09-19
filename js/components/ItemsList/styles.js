import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: 'white',
  },
  list: {
    backgroundColor: 'white',
    flexGrow: 0.7,
    width: width,
    overflow: 'visible',
  },
  listItem: {
    borderBottomColor: colors.darkBlue,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: width / 12,
  },
  listImage: {
    resizeMode: 'contain',
    alignSelf: 'stretch',
    flex: 0.35,
    marginRight: width / 12,
  },
  listText: {
    marginLeft: 10,
    flex: 1,
  },
  listTitle: {
    fontFamily: fonts.main,
    fontSize: 18,
    fontWeight: '700',
    color: '#515151',
    flexWrap: 'wrap',
  },
  listPrice: {
    marginTop: 7,
    color: colors.darkBlue,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: fonts.main,
  },
  listPriceFree: {
    marginTop: 7,
    color: colors.green,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: fonts.main,
  },
  locationContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
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

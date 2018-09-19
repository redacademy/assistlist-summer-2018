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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    maxHeight: height / 4,
  },
  listImage: {
    resizeMode: 'contain',
    alignSelf: 'stretch',
    flex: 0.35,
    marginLeft: width / 12,
  },
  listText: {
    marginLeft: width / 7,
    flex: 1,
  },
  listTitle: {
    fontFamily: fonts.main,
    fontSize: 18,
    fontWeight: '700',
    color: '#515151',
    marginRight: 5,
  },
  fresh: {
    backgroundColor: colors.green,
  },
  medium: {
    backgroundColor: colors.yellow,
  },
  stale: {
    backgroundColor: colors.red,
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
  timeContainer: {
    borderBottomColor: colors.darkBlue,
    borderBottomWidth: 0.5,
    paddingVertical: 5,
  },
  timeText: {
    textAlign: 'center',
    fontFamily: fonts.main,
    fontSize: 12,
    color: colors.grey,
  },
  statusIcon: {
    marginLeft: 5,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  freshIcon: {
    backgroundColor: colors.green,
    marginLeft: 5,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  refreshIcon: {
    height: 20,
    width: 20,
    marginLeft: width / 10,
  },
});

export default styles;

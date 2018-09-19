import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    paddingVertical: 15,
  },
  alignHeader: {
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  staleIcon: {
    marginRight: 5,
    backgroundColor: colors.red,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  mediumIcon: {
    marginRight: 5,
    backgroundColor: colors.yellow,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  freshIcon: {
    marginRight: 5,
    backgroundColor: colors.green,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  headerText: {
    fontFamily: fonts.main,
    fontSize: 16,
  },
  days: {
    marginLeft: 5,
    alignSelf: 'center',
    fontFamily: fonts.main,
    marginTop: 3,
    fontSize: 12,
    color: colors.grey,
  },
});

export default styles;

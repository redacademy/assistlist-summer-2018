import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  icon: {
    height: height / 28,
    width: width / 16,
    marginHorizontal: width / 130,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Nunito-SemiBold',
    color: colors.darkBlue,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default styles;

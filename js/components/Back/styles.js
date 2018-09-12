import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  icon: {
    width: width / 20,
    height: height / 20,
    margin: 10,
  },
});

export default styles;

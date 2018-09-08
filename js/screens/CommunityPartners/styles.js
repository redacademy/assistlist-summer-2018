import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const space = height * 0.045;
const imgWidth = width * 0.63
const halfWidth = width * 0.5

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  bcRehab: {
    width: imgWidth,
    height: height * .15,
    marginBottom: space,
  },
  posAbilities: {
    width: imgWidth,
    height: height * .1,
    marginBottom: space,
  },
  hub: {
    width: halfWidth,
    height: height * .1,
    marginBottom: space,
  },
});
export default styles;

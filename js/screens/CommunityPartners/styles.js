import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: height,
    flex: 1,
    justifyContent: 'center',
  },
  containerPartners: {
    padding: 20,
    margin: 20,
    alignItems: 'center',
  },
  bcRehab: {
    marginTop: 20,
    marginRight: 20,
    resizeMode: 'contain',
    height: height / 7,
  },
  posAbilities: {
    height: height / 4
  },
  hub: {
    resizeMode: 'contain',
    height: height / 8.8,
    marginBottom: 20,
  },
});
export default styles;
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const space = height * 0.045;
const hubHeight = height * 0.1
const hubWidth = width * 0.5
const posHeight = height * 0.1
const posWidth = width * 0.6
const bcHeight = height * 1.5
const bcWidth = width * .65

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  bcRehab: {
    width: bcWidth,
    height: bcHeight,
    marginBottom: space,
  },
  posAbilities: {
    width: posWidth,
    height: posHeight,
    marginBottom: space,
  },
  hub: {
    width: hubWidth,
    height: hubHeight,
    marginBottom: space,
  },
});
export default styles;

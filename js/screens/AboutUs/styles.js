import { StyleSheet, Dimensions } from 'react-native';
import { fonts } from '../../config/styles';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 21,
    paddingRight: 18
  },
  header: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0072A0',
    fontFamily: fonts.main,
    paddingVertical: 10,

  },
  desc: {
    fontSize: 14,
    color: '#0072A0',
    borderColor: '#0072A0',
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderRadius: 5,
    textAlign: 'left',
    fontFamily: fonts.main,
    paddingHorizontal: 25,
    paddingVertical: 10,
  },

});

export default styles;

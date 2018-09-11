import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../config/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15
  },
  button: {
    flex: 0.23,
    borderRadius: 7,
    textAlign: 'center',
    backgroundColor: colors.darkBlue,
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20
  },
  buttonText: {
    fontFamily: fonts.main,
    fontWeight: "500",
    color: "white",
    alignSelf: "center",
    fontSize: 24
  }
});

export default styles;
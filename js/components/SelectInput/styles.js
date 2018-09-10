import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../config/styles';

const styles = StyleSheet.create({
  modalViewBottom: {
    height: 215,
    justifyContent: 'center',
    backgroundColor: '#D0D4DB',
  },
  modalViewTop: {
    flex: 1,
  },
  input: {
    fontSize: 16,
    paddingTop: 8,
    paddingHorizontal: 10,
    paddingBottom: 8,
    borderWidth: 1,
    borderColor: colors.darkBlue,
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
  iconRight: {
    position: 'absolute',
    backgroundColor: 'transparent',
    borderTopWidth: 7.5,
    borderTopColor: 'transparent',
    borderBottomWidth: 7.5,
    borderBottomColor: 'transparent',
    borderLeftWidth: 11.5,
    borderLeftColor: colors.darkBlue,
    width: 0,
    height: 0,
    top: 13,
    right: 16,
  },
  iconPlay: {
    position: 'absolute',
    top: 11,
    right: 13,
    color: colors.darkBlue,
  },
});

export default styles;

import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 12,
  },
  header: {
    color: colors.darkBlue,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    fontSize: 18,
    fontFamily: fonts.main,
    fontWeight: 'bold',
  },
  modalHeader: {
    marginTop: 18,
    paddingBottom: 10,
    flexDirection: 'row',
    borderColor: colors.darkBlue,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderWidth: 1,
  },
  modalClose: {
    marginRight: 10,
  },
  closeButton: {
    color: colors.darkBlue,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContent: {
    paddingHorizontal: 15,
    borderColor: colors.darkBlue,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  singleContent: {
    fontFamily: fonts.main,
    fontSize: 16,
    maxWidth: '90%',
  },
  bullett: {
    color: colors.darkBlue,
    paddingRight: 10,
    marginTop: -9,
    fontSize: 24,
  },
  singleContainer: {
    marginTop: 25,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});

export default styles;

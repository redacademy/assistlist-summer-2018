import { StyleSheet, Dimensions } from 'react-native';
import { fonts, colors } from '../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  sendMessageContainer: {
    justifyContent: 'flex-end',
    width: width,
    height: 75,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  quickMessageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickMessage: {
    backgroundColor: colors.lightBlue,
    borderRadius: 5,
    padding: 5,
    marginVertical: 8,
  },
  messageText: {
    fontFamily: fonts.main,
    color: 'white',
    fontSize: 16,
  },
  sendMessage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageInput: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: colors.darkBlue,
    marginRight: 5,
    borderRadius: 7,
    borderWidth: 1,
    color: colors.darkBlue,
    paddingVertical: 3,
    paddingLeft: 10,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: colors.green,
    borderRadius: 7,
    paddingBottom: 4,
    paddingTop: 2,
    flex: 0.2,
  },
  sendButtonText: {
    color: 'white',
    fontFamily: fonts.main,
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center'
  }
});

export default styles;

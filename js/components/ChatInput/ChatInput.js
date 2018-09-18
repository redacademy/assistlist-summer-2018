import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { Form, Field } from 'react-final-form';
import PropTypes from 'prop-types'
import styles from './styles';

const ChatInput = ({
  navigation,
  createMessage,
  currentUser,
  messages,
  item,
}) => {
  let messageContent = [];
  messages && messages.map(message => messageContent.push(message.content));
  return (
    <Form
      onSubmit={values =>
        createMessage({
          variables: {
            from: currentUser,
            chatId: navigation.getParam('chatId'),
            content: values.content,
          },
        }).then(this.textInput.clear())
      }
      render={({ handleSubmit }) => (
        <KeyboardAvoidingView
          style={styles.sendMessageContainer}
          behavior="position"
          enabled
          keyboardVerticalOffset={64}
        >
          {currentUser !== item.user.id && (
            <View style={styles.quickMessageContainer}>
              {!messageContent.includes('What condition is it in?') && (
                <TouchableOpacity
                  onPress={() =>
                    createMessage({
                      variables: {
                        from: currentUser,
                        chatId: navigation.getParam('chatId'),
                        content: 'What condition is it in?',
                      },
                    })
                  }
                  style={styles.quickMessage}
                >
                  <Text style={styles.messageText}>
                    What condition is it in?
                  </Text>
                </TouchableOpacity>
              )}
              {!messageContent.includes('Hi! Is this still available?') && (
                <TouchableOpacity
                  onPress={() =>
                    createMessage({
                      variables: {
                        from: currentUser,
                        chatId: navigation.getParam('chatId'),
                        content: 'Hi! Is this still available?',
                      },
                    })
                  }
                  style={styles.quickMessage}
                >
                  <Text style={styles.messageText}>
                    Hi! Is this still available?
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          )}
          <View style={styles.sendMessage}>
            <Field name="content">
              {({ input }) => (
                <TextInput
                  style={styles.messageInput}
                  {...input}
                  ref={input => {
                    this.textInput = input;
                  }}
                />
              )}
            </Field>
            <TouchableOpacity onPress={handleSubmit} style={styles.sendButton}>
              <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    />
  );
};

ChatInput.propTypes = { 
  navigation: PropTypes.object.isRequired,
  createMessage: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
  messages: PropTypes.array,
  item: PropTypes.object.isRequired,
}

export default ChatInput;

import React from 'react';
import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
} from 'react-native';
import ItemMeta from '../../components/ItemMeta';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import PropTypes from 'prop-types'

const ChatBox = ({ messages, currentUser, item }) => {
  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
      style={styles.chatContainer}
      keyboardVerticalOffset={132}
    >
      <ScrollView
        contentOffset={{ y: 10000000 }}
        ref={ref => (this.scrollView = ref)}
        onContentSizeChange={() => {
          this.scrollView.scrollToEnd({ animated: true });
        }}
      >
        <View style={styles.itemMeta}>
          <ItemMeta itemData={item} />
        </View>
        {messages.map(message => {
          const messageStyle = () => {
            let from, icon;
            currentUser === message.from
              ? ((from = 'fromMe'), (icon = 'md-arrow-dropleft'))
              : ((from = 'fromYou'), (icon = 'md-arrow-dropright'));
            return { from, icon };
          };
          return (
            <View
              key={message.id}
              style={[styles.message, styles[messageStyle().from]]}
            >
              <Text style={styles.messageText}>{message.content}</Text>
              <Icon
                name={messageStyle().icon}
                size={40}
                style={styles[`${messageStyle().from}Icon`]}
              />
            </View>
          );
        })}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

ChatBox.propTypes = { 
  messages: PropTypes.array, 
  currentUser: PropTypes.string.isRequired, 
  item: PropTypes.object.isRequired 
}

export default ChatBox;

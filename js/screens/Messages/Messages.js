import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import SafetyTips from '../../components/SafetyTips';
import PropTypes from 'prop-types'
import styles from './styles';

class Messages extends Component {
  state = { modalVisible: false };
  toggleModal = () => {
    this.setState(PrevState => ({
      modalVisible: !PrevState.modalVisible,
    }));
  };
  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.data.map(chat => {
          return (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Chat', {
                  chatId: chat.id,
                  item: chat.item,
                })
              }
              style={styles.singleChat}
              key={chat.id}
            >
              <Image
                style={styles.listImage}
                source={{
                  uri:
                    'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/wheelchair-512.png',
                }}
              />
              <View style={styles.textArea}>
                <Text style={styles.title}>{chat.item.title}</Text>
                <Text style={styles.lastMessage}>
                  {(chat.messages.length > 0 && chat.messages[0].content) || ''}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <SafetyTips
          modalVisible={this.state.modalVisible}
          closeModal={this.toggleModal}
        />
      </ScrollView>
    );
  }
}

Messages.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
}

export default Messages
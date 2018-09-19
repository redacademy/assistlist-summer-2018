import React, { Component } from 'react';
import Messages from './Messages';
import { View, Text } from 'react-native';
import ChatMenu from '../../components/ChatMenu';

export default class MessagesContainer extends Component {
  static navigationOptions = {
    title: 'My Messages',
    headerRight: <ChatMenu />,
  };
  render() {
    return <Messages />;
  }
}

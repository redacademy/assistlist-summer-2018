import React, { Component } from 'react';
import Messages from './Messages';
export default class MessagesContainer extends Component {
  static navigationOptions = {
    title: 'Messages',
  };
  render() {
    return <Messages />;
  }
}

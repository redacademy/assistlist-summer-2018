import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import styles from './styles';

export default class RegisterModal extends Component {
  state = { modalVisible: false };
  showOverlay() {
    this.setState({ modalVisible: true });
  }

  hideOverlay() {
    this.setState({ modalVisible: false });
  }

  render() {}
}

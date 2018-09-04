import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SafetyTips from '../../components/SafetyTips';

export default class Messages extends Component {
  state = { modalVisible: false };
  toggleModal = () => {
    this.setState(PrevState => ({
      modalVisible: !PrevState.modalVisible,
    }));
  };

  render() {
    return (
      <View>
        <Text> messagese here </Text>
        <TouchableOpacity onPress={this.toggleModal}>
          <Text>Open saftey tips</Text>
        </TouchableOpacity>
        <SafetyTips
          modalVisible={this.state.modalVisible}
          closeModal={this.toggleModal}
        />
      </View>
    );
  }
}

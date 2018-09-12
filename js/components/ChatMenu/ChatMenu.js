import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import SafetyTips from '../SafetyTips';
import styles from './styles';

export default class ChatMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { modalVisible: false, safe: false };
  }

  showOverlay() {
    this.setState({ modalVisible: true });
  }

  hideOverlay = () => {
    this.setState({ safe: false });
  };

  render() {
    return (
      <View style={styles.Menu}>
        <TouchableOpacity onPress={this.showOverlay.bind(this)}>
          <Image
            style={styles.headerOption}
            source={require('../../assets/images/Icons/Other.png')}
          />
        </TouchableOpacity>
        <Modal
          style={styles.container}
          transparent={true}
          visible={this.state.modalVisible}
          onBackdropPress={() => this.setState({ modalVisible: false })}
        >
          <View style={styles.SafetyTips}>
            <TouchableOpacity
              onPress={() => this.setState({ safe: !this.state.safe })}
            >
              <Text style={styles.optionText}>Safety tips</Text>
            </TouchableOpacity>
          </View>
          {this.state.safe && (
            <SafetyTips
              modalVisible={this.state.modalVisible}
              hideOverlay={this.hideOverlay}
            />
          )}

          <TouchableOpacity
            style={styles.Delete}
            onPress={() => alert(`Delete`)}
          >
            <Text style={styles.optionText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Cancel}
            onPress={() => this.setState({ modalVisible: false })}
          >
            <Text style={styles.optionText}> Cancel </Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class RegisterModal extends React.Component {
  state = { modalVisible: false };
  showOverlay() {
    this.setState({ modalVisible: true });
  }

  hideOverlay() {
    this.setState({ modalVisible: false });
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.showOverlay.bind(this)}>
          <Text>Must register before continuing</Text>
        </TouchableOpacity>
        <Modal style={styles.body} visible={this.state.modalVisible}>
          <View style={styles.container}>
            <Text style={styles.Text}>
              In order to progress you must register for an account.
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('AccountForm');
                }}
                style={styles.register}
              >
                <Text style={styles.registerText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({ modalVisible: false })}
                style={styles.cancel}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default withNavigation(RegisterModal);

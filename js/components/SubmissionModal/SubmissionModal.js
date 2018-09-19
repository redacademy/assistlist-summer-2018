import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class SubmissionModal extends React.Component {
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
          <Image
            style={styles.icon}
            source={require('../../assets/images/Icons/Back.png')}
          />
        </TouchableOpacity>
        <Modal style={styles.body} visible={this.state.modalVisible}>
          <View style={styles.container}>
            <Text style={styles.Text}>
              Are you sure you want to proceed without saving?
            </Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Listings') &&
                    this.setState({ modalVisible: false });
                }}
                style={styles.yes}
              >
                <Text style={styles.yesText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({ modalVisible: false })}
                style={styles.no}
              >
                <Text style={styles.noText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default withNavigation(SubmissionModal);

import React, { Component } from 'react';
import { BlurView } from 'react-native-blur';
import Modal from 'react-native-modal';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default class CreateItemNav extends Component {
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
            source={require('../../assets/images/Footer/Green-Add.png')}
          />
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={this.state.modalVisible}
          onBackdropPress={() => this.setState({ modalVisible: false })}
        >
          <View style={styles.container}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Mobility</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Bathroom Safety</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Living Aids</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Transfer Aids</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionLast}>
              <Text style={styles.optionText}>Bedroom Equipments</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

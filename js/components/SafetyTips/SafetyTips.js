import React, { Component } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

class SafetyTips extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        style={styles.modal}
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.header}>Safety Tips</Text>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={this.props.hideOverlay}
            >
              <Text style={styles.closeButton}>X</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.modalContent}>
            <View style={styles.singleContainer}>
              <Text style={styles.bullett}>{'\u2022'}</Text>
              <Text style={styles.singleContent}>
                Coordinate a meeting in-person at a public location to
                thoroughly inspect the equipment and bring a friend to accompany
                you.
              </Text>
            </View>
            <View style={styles.singleContainer}>
              <Text style={styles.bullett}>{'\u2022'}</Text>
              <Text style={styles.singleContent}>
                Never give out your private personal or financial information
                such as your medical records or banking information.
              </Text>
            </View>
            <View style={styles.singleContainer}>
              <Text style={styles.bullett}>{'\u2022'}</Text>
              <Text style={styles.singleContent}>
                Do not make a payment to anyone you have not met in person. As a
                safe alternative to carrying cash, consider paying for your item
                with PayPal so you don't have to reveal your credit information.
                Do not make financial transactions via cheque, money wiring
                services, or services like Western Union, Android Pay or Canada
                Post.
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

SafetyTips.propTypes = {
  toggleModal: PropTypes.func,
};

export default SafetyTips;

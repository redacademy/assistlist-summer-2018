import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

class MobilitySub extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal style={styles.modal} transparent={true}>
        <View>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={this.props.mobilityOverlay}
          >
            <Text style={styles.closeButton}>Cancel</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Walker</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Wheelchair</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Crutches</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Scooters</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Cane</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionLast}>
              <Text style={styles.optionText}>Poles</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
export default MobilitySub;

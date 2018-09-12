import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

class LivingAidsSub extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal style={styles.modal} transparent={true}>
        <View>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={this.props.livingOverlay}
          >
            <Text style={styles.closeButton}>Cancel</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Long-Handled Reacher</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Sock-aid</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Long-handled Shoehorn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Feeding Aid</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionLast}>
              <Text style={styles.optionText}>Adaptive Clothing</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
export default LivingAidsSub;

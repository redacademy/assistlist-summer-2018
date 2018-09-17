import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

class BedroomSub extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal style={styles.modal} transparent={true}>
        <View>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={this.props.bedroomOverlay}
          >
            <Text style={styles.closeButton}>Cancel</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Hospital Bed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Mattress</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Furniture Blocks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Bed Assist Rail</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Overbed Table</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionLast}>
              <Text style={styles.optionText}>Bed Cradle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
export default BedroomSub;

import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

class TransferAidsSub extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal style={styles.modal} transparent={true}>
        <View>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={this.props.transferOverlay}
          >
            <Text style={styles.closeButton}>Cancel</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Lift Recline Chair</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>
                Mechanical Overhead Lift Track
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Mechanical Floor Lift</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Sling</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Sliding Board</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Floor to Ceiling Pole</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionLast}>
              <Text style={styles.optionText}>Transfer Belt</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
export default TransferAidsSub;

import React, { Component } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';

class BathroomSafetySub extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal style={styles.modal} transparent={true}>
        <View>
          <TouchableOpacity
            style={styles.modalClose}
            onPress={this.props.bathroomOverlay}
          >
            <Text style={styles.closeButton}>Cancel</Text>
          </TouchableOpacity>
          <View style={styles.container}>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Raised Toilet Seat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Toilet Safety Frame</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Tub Transfer Bench</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Shower Chair</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Shower Stool</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>Tub Rail Grip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionLast}>
              <Text style={styles.optionText}>Commode</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
export default BathroomSafetySub;

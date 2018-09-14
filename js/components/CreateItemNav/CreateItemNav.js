import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { withNavigation } from 'react-navigation';

class CreateItemNav extends Component {
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
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                this.setState({ modalVisible: false });
                this.props.navigation.navigate('CreateItem');
              }}
            >
              <Text style={styles.optionText}>Mobility</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                this.setState({ modalVisible: false });
                this.props.navigation.navigate('CreateItem');
              }}
            >
              <Text style={styles.optionText}>Bathroom Safety</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                this.setState({ modalVisible: false });
                this.props.navigation.navigate('CreateItem');
              }}
            >
              <Text style={styles.optionText}>Living Aids</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.option}
              onPress={() => {
                this.setState({ modalVisible: false });
                this.props.navigation.navigate('CreateItem');
              }}
            >
              <Text style={styles.optionText}>Transfer Aids</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.optionLast}
              onPress={() => {
                this.setState({ modalVisible: false });
                this.props.navigation.navigate('CreateItem');
              }}
            >
              <Text style={styles.optionText}>Bedroom Equipments</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

export default withNavigation(CreateItemNav);

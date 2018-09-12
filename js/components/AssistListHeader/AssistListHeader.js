import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

class AssistListHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/Logo/Logo.png')}
        />
        <Text style={styles.title}>AssistList</Text>
      </View>
    );
  }
}

export default AssistListHeader;

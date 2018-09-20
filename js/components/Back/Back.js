import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

class Back extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.goBack();
        }}
      >
        <Image
          style={styles.icon}
          source={require('../../assets/images/Icons/Back.png')}
        />
      </TouchableOpacity>
    );
  }
}

export default withNavigation(Back);

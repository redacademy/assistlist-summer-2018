import React, { Component } from 'react';
import styles from './styles';
import { View, StatusBar, Text, Image, Alert } from 'react-native';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: true,
    };
  }

  hide_splash = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    let hide = this.hide_splash;

    setTimeout(() => {
      hide();
    }, 1000);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.splashRoot}>
        <View style={styles.splashChild}>
          <Image
            source={require('../js/assets/Images/Logo/Name-Logo.png')}
            style={styles.mainLogo}
          />
        </View>
      </View>
    );

    return (
      <View style={styles.MainContainer}>
        <StatusBar barStyle="dark-content" />
        <Text style={{ textAlign: 'center' }}> Welcome to Assist List! </Text>

        {this.state.isVisible === true ? Splash_Screen : null}
      </View>
    );
  }
}

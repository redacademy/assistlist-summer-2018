import React, { Component } from 'react';
import styles from './styles';
import { View, Text, Image, Alert } from 'react-native';
import Splash from './components/Splash/Splash';

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
    var that = this;

    setTimeout(function() {
      that.hide_splash();
    }, 1200);
  }

  render() {
    let Splash_Screen = (
      <View style={styles.splashRoot}>
        <View style={styles.splashChild}>
          <Image
            source={require('../js/assets/Images/Logo/Name-Logo.png')}
            style={styles.mainLogo}
          />
          <View style={styles.loadContainer}>
            <Splash
              style={styles.loadS}
              source={require('../js/assets/Images/Loading/Rectangle-Small.png')}
            />
            <Splash
              style={styles.loadM}
              source={require('../js/assets/Images/Loading/Rectangle-Medium.png')}
            />
            <Splash
              style={styles.loadL}
              source={require('../js/assets/Images/Loading/Rectangle-Large.png')}
            />
          </View>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </View>
    );

    return (
      <View style={styles.MainContainer}>
        <Text style={{ textAlign: 'center' }}> Welcome to Assist List! </Text>

        {this.state.isVisible === true ? Splash_Screen : null}
      </View>
    );
  }
}

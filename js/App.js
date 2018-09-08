import React, { Component } from 'react';
import RootStackNavigator from './navigation/RootStackNavigation';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <RootStackNavigator />;
  }
}

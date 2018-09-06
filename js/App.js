import React, { Component } from 'react';
import AccountForm from './screens/AccountForm';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return <AccountForm />;
  }
}

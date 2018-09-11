import React, { Component } from 'react';
import client from './config/api';
import { ApolloProvider } from 'react-apollo';
import SplashScreen from 'react-native-splash-screen';
import RootStackNavigator from './navigation/RootStackNavigation';

export default class App extends Component {

  componentDidMount() {
    SplashScreen.hide()
  }
  
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}

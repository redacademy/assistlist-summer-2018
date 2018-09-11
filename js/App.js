import React, { Component } from 'react';
import client from './config/api';
import { ApolloProvider } from 'react-apollo';
import SplashScreen from 'react-native-splash-screen';
import createRootNavigator from './navigation/RootStackNavigation';
import { getUser } from './config/models'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
    };
  }

  componentDidMount() {
    SplashScreen.hide()
    const currentUser = []
    getUser().map(user => currentUser.push(user))
    if(currentUser.length > 0) this.setState({signedIn: true})
  }

  render() {
    const Layout = createRootNavigator(this.state.signedIn)
    return (
      <ApolloProvider client={client}>
        <Layout />
      </ApolloProvider>
    );
  }
}

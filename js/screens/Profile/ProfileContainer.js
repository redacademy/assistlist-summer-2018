import React, { Component } from 'react';
import Profile from './Profile';

export default class ProfileContainer extends Component {
  static navigationOptions = {
    title: 'My Profile',
  };
  render() {
    return <Profile navigation={this.props.navigation} />;
  }
}

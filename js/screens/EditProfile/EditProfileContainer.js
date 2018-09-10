import React, { Component } from 'react';
import EditProfile from './EditProfile';

export default class EditProfileContainer extends Component {
  static navigationOptions = { title: 'Edit Account Info' };
  render() {
    return <EditProfile />;
  }
}

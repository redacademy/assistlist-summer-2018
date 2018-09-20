import React, { Component } from 'react';
import EditProfile from './EditProfile';
import Back from '../../components/Back';

export default class EditProfileContainer extends Component {
  static navigationOptions = {
    title: 'Edit Account Info',
    headerLeft: <Back />,
  };
  render() {
    return <EditProfile />;
  }
}

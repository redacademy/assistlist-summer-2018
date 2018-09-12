import React, { Component } from 'react';
import Notifications from './Notifications';
import Back from '../../components/Back';

export default class NotificationsContainer extends Component {
  static navigationOptions = {
    title: 'Notifications',
    headerLeft: <Back />,
  };
  render() {
    return <Notifications />;
  }
}

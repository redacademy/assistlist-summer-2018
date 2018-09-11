import React, { Component } from 'react';
import Notifications from './Notifications';

export default class NotificationsContainer extends Component {
  static navigationOptions = { title: 'Notifications' };
  render() {
    return <Notifications />;
  }
}

import React, { Component } from 'react';
import Profile from './Profile';
import UserContext from '../../context/UserContext';

export default class ProfileContainer extends Component {
  static navigationOptions = {
    title: 'My Profile',
  };
  render() {
    return (
      <UserContext.Consumer>
        {values => {
          return <Profile navigation={this.props.navigation} />;
        }}
      </UserContext.Consumer>
    );
  }
}

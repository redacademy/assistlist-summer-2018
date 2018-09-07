import React, { Component } from 'react';
import CommunityPartners from './CommunityPartners';

export default class CommunityPartnersContainer extends Component {
  static navigationOptions = {
    title: 'Community Partners',
  };
  render() {
    return <CommunityPartners navigation={this.props.navigation} />;
  }
}

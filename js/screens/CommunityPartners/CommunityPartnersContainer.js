import React, { Component } from 'react';
import CommunityPartners from './CommunityPartners';
import Back from '../../components/Back';

export default class CommunityPartnersContainer extends Component {
  static navigationOptions = {
    title: 'Community Partners',
    headerLeft: <Back />,
  };
  render() {
    return <CommunityPartners navigation={this.props.navigation} />;
  }
}

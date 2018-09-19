import React, { Component } from 'react';
import AboutUs from './AboutUs';
import Back from '../../components/Back';

export default class AboutUsContainer extends Component {
  static navigationOptions = {
    title: 'About Us',
    headerLeft: <Back />,
  };
  render() {
    return <AboutUs />;
  }
}

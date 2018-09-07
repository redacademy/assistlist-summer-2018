import React, { Component } from 'react';
import AboutUs from './AboutUs';

export default class AboutUsContainer extends Component {
  static navigationOptions = {
    title: 'About Us',
  };
  render() {
    return <AboutUs />;
  }
}

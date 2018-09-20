import React, { Component } from 'react';
import About from './About';

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About Us',
  };
  render() {
    return <About navigation={this.props.navigation} />;
  }
}

import React, { Component } from 'react';
import About from './About';

export default class AboutContainer extends Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return <About navigation={this.props.navigation} />;
  }
}

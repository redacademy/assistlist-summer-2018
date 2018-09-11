import React, { Component } from 'react';
import OnBoarding from './OnBoarding';

export default class OnBoardingContainer extends Component {
  render() {
    return <OnBoarding navigation={this.props.navigation} />;
  }
}
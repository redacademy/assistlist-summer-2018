import React, { Component } from 'react';
import Listings from './Listings';
export default class ListingsContainer extends Component {
  static navigationOptions = {
    title: 'Listings',
  };
  render() {
    return <Listings />;
  }
}

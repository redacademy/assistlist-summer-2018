import React, { Component } from 'react';
import MyListings from './MyListings';

export default class MyListingsContainer extends Component {
  static navigationOptions = { title: 'My Listings' };
  render() {
    return <MyListings />;
  }
}

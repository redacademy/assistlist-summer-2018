import React, { Component } from 'react';
import MyListings from './MyListings';
import Back from '../../components/Back';

export default class MyListingsContainer extends Component {
  static navigationOptions = {
    title: 'My Listings',
    headerLeft: <Back />,
  };
  render() {
    return <MyListings />;
  }
}

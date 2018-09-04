import React, { Component } from 'react';
import CreateItem from './CreateItem';
export default class CreateItemContainer extends Component {
  static navigationOptions = {
    title: 'Create Item',
  };
  render() {
    return <CreateItem />;
  }
}

import React, { Component } from 'react';
import CreateItem from './CreateItem';

export default class CreateItemContainer extends Component {
  static navigationOptions = {
    title: 'Create Item',
  };

  notificationlist = [
    {
      label: `Select a Notification Setting`,
      value: null,
    },
    { label: 'Bumped to Next Page', value: 'bumped' },
    { label: '7 Days', value: '7' },
    { label: '30 Days', value: '30' },
  ];

  locationlist = [
    {
      label: `Select a Location`,
      value: null,
    },
    { label: 'Vancouver', value: 'vancouver' },
    { label: 'Burnaby', value: 'burnaby' },
    { label: 'Delta', value: 'delta' },
    { label: 'New Westminster', value: 'newWestminster' },
    { label: 'North Vancouver', value: 'northVancouver' },
    { label: 'Richmond', value: 'richmond' },
    { label: 'Surrey', value: 'surrey' },
    { label: 'Langley', value: 'langley' },
    { label: 'Coquitlam', value: 'coquitlam' },
    { label: 'Abbotsford', value: 'abbotsford' },
    { label: 'Mission', value: 'mission' },
    { label: 'Maple Ridge', value: 'mapleRidge' },
    { label: 'Other', value: 'other' },
  ];
  categorylist = [
    {
      label: `Select a Category`,
      value: null,
    },
    { label: 'Wheelchair', value: 'wheelchair' },
    { label: 'Scooter', value: 'scooter' },
    { label: 'Walker', value: 'walker' },
    { label: 'Crutches', value: 'crutches' },
    { label: 'Cane', value: 'cane' },
  ];
  render() {
    return (
      <CreateItem
        locationList={this.locationlist}
        notificationList={this.notificationlist}
        categoryList={this.categorylist}
      />
    );
  }
}

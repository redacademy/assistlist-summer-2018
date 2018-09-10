import React, { Component } from 'react';
import Listings from './Listings';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingIndicator from '../../components/LoadingIndicator';
import { GET_ITEMS } from '../../config/queries';
import {Text} from 'react-native'

export default class ListingsContainer extends Component {
  static navigationOptions = {
    title: 'Listings',
  };
  render() {
    return (
      <Query query={GET_ITEMS}>
        {({ data, loading, error }) => {
          if (loading) return <LoadingIndicator />;
          if (error) return <Text>Error :</Text>;
          return <Listings data={data} />;
        }}
      </Query>
    );
  }
}

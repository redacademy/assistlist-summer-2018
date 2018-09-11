import React, { Component } from 'react';
import Listings from './Listings';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingIndicator from '../../components/LoadingIndicator';
const GET_ITEMS = gql`
  {
    allItems {
      title
      id
      createdAt
      price
      location {
        title
      }
      category {
        title
      }
      user {
        id
        username
      }
    }
  }
`;

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

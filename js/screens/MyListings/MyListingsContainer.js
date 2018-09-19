import React, { Component } from 'react';
import MyListings from './MyListings';
import { ItemSearchContext } from '../../context/ItemsProvider';
import { Text } from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator';
import { Mutation, Query } from 'react-apollo';
import { ITEM_STATUS, USER_ITEMS } from '../../config/queries';
import { getUser } from '../../config/models';

export default class MyListingsContainer extends Component {
  static navigationOptions = { title: 'My Listings' };

  render() {
    return (
      <Query query={USER_ITEMS} variables={{ id: 'cjm15i1ya0tia01608yp607g5' }}>
        {({ data, loading, error }) => {
          if (loading) return <LoadingIndicator />;
          if (error) return <Text>Error :</Text>;
          return (
            <Mutation mutation={ITEM_STATUS}>
              {updateItem => {
                return (
                  <MyListings data={data.allItems} updateItem={updateItem} />
                );
              }}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

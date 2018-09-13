import React, { Component } from 'react';
import Listings from './Listings';
import { ItemSearchContext } from '../../context/ItemsProvider';
import { Text } from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator';

export default class ListingsContainer extends Component {
  static navigationOptions = {
    title: 'Listings',
  };
  render() {
    return (
      <ItemSearchContext.Consumer>
        {({ data, loading, error, filterByTitle }) => {
          if (loading) return <LoadingIndicator />;
          if (error) return <Text>Error :</Text>;
          return <Listings data={data} searchMethods={{ filterByTitle }} />;
        }}
      </ItemSearchContext.Consumer>
    );
  }
}

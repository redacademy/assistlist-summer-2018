import React, { Component } from 'react';
import Listings from './Listings';
import { ItemSearchContext } from '../../context/ItemsProvider';
import { Text } from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator';

export default class ListingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { priceState: false };
  }

  togglepriceState = filter => {
    if (!this.state.priceState) {
      filter('asc');
    } else {
      filter('desc');
    }
    this.setState(prevState => ({
      priceState: !prevState.priceState,
    }));
  };

  static navigationOptions = { title: 'Listings' };
  render() {
    return (
      <ItemSearchContext.Consumer>
        {({ data, loading, error, filterByTitle, filterByPrice }) => {
          if (loading) return <LoadingIndicator />;
          if (error) return <Text>Error :</Text>;
          return (
            <Listings
              data={data}
              searchMethods={{
                filterByTitle,
                filterByPrice,
              }}
              toggleSort={filter => this.togglepriceState(filter)}
              sortPriceState={this.state.priceState}
            />
          );
        }}
      </ItemSearchContext.Consumer>
    );
  }
}

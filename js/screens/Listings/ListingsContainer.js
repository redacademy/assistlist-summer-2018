import React, { Component } from 'react';
import Listings from './Listings';
import { ItemSearchContext } from '../../context/ItemsProvider';
import { Text, Image, View } from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator';
import styles from './styles';

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

  static navigationOptions = {
    headerTitle: (
      <View style={styles.header}>
        <Image
          style={styles.Logo}
          source={require('../../assets/images/Logo/Logo.png')}
        />
        <Text style={styles.LogoText}>AssistList</Text>
      </View>
    ),
    title: 'Listings',
  };
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

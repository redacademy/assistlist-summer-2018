import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { GET_ITEMS } from '../config/queries';

export const ItemSearchContext = React.createContext();

export default class ItemsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount = async () => {
    const data = await this.props.client.query({
      query: GET_ITEMS,
    });
    this.setState({
      items: data.data.allItems,
    });
  };

  filterByTitle = async title => {
    if (title.length === 0) {
      const data = await this.props.client.query({ query: GET_ITEMS });
      this.setState({ items: data.data.allItems });
    }
    if (title.length > 0) {
      const data = await this.props.client.query({
        query: GET_ITEMS,
        variables: {
          filter: {
            title: title,
          },
        },
      });
      this.setState({ items: data.data.allItems });
    }
  };

  render() {
    return (
      <ItemSearchContext.Provider
        value={{
          data: this.state.items,
          loading: false,
          error: false,
          filterByTitle: this.filterByTitle,
        }}
      >
        {this.props.children}
      </ItemSearchContext.Provider>
    );
  }
}

const styles = StyleSheet.create({});

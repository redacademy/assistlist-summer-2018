import React, { Component } from 'react';
import { Query, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import { GET_ITEMS } from '../config/queries';
import { getUser } from '../config/models';

export const ItemSearchContext = React.createContext();

export default class ItemsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], currentUser: undefined };
  }

  componentDidMount = async () => {
    await getUser().map(user => this.setState({ currentUser: user.id }));
    const data = await this.props.client.query({
      query: GET_ITEMS,
      variables: {
        filter: {
          user: {
            id_not: this.state.currentUser,
          },
        },
      },
    });
    this.setState({
      items: data.data.allItems,
      filteredItems: [],
      isFiltered: false,
    });
  };

  filterByTitle = async searchText => {
    if (searchText.length === 0) {
      this.setState({ filteredItems: [], isFiltered: false });
      const data = await this.props.client.query({
        query: GET_ITEMS,
      });
      this.setState({
        items: data.data.allItems,
      });
    }

    if (searchText.length > 0) {
      const items = await this.props.client.query({
        query: GET_ITEMS,
        variables: {
          filter: {
            title_contains: searchText,
            user: {
              id_not: this.state.currentUser,
            },
          },
        },
      });

      const location = await this.props.client.query({
        query: GET_ITEMS,
        variables: {
          filter: {
            user: {
              id_not: this.state.currentUser,
            },
            location: {
              title_contains: searchText,
            },
          },
        },
      });
      const subCat = await this.props.client.query({
        query: GET_ITEMS,
        variables: {
          filter: {
            user: {
              id_not: this.state.currentUser,
            },
            subCategory: {
              title_contains: searchText,
            },
          },
        },
      });
      const data = [
        ...items.data.allItems,
        ...location.data.allItems,
        ...subCat.data.allItems,
      ].reduce((acc, item) => {
        if (acc.find(d => d.id === item.id)) {
          return acc;
        } else {
          acc.push(item);
        }
        return acc;
      }, []);
      this.setState({
        items: data,
      });
    }
  };

  filterByPrice = async order => {
    if (order === 'asc') {
      const items = [...this.state.items];
      items.sort((a, b) => a.price - b.price);
      this.setState({ items });
    }
    if (order === 'desc') {
      const items = [...this.state.items];
      items.sort((a, b) => b.price - a.price);
      this.setState({ items });
    }
  };

  render() {
    return (
      <ItemSearchContext.Provider
        value={{
          data: this.state.isFiltered
            ? this.state.filteredItems
            : this.state.items,
          loading: false,
          error: false,
          filterByTitle: this.filterByTitle,
          filterByPrice: order => this.filterByPrice(order),
        }}
      >
        {this.props.children}
      </ItemSearchContext.Provider>
    );
  }
}

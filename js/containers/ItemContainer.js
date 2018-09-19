import React from 'react';
import { adopt } from 'react-adopt';
import { Mutation, Query } from 'react-apollo';
import { CREATE_ITEM, GET_LOCATIONS, GET_SUBCATEGORIES } from '../config/queries'

const createItem = ({ render }) => (
  <Mutation mutation={CREATE_ITEM}>
    {(mutation, { data, error, loading }) =>
      render({ mutation, data, error, loading })
    }
  </Mutation>
);

const locations = ({ render }) => (
  <Query query={GET_LOCATIONS}>
    {({ data, error, loading, }) =>
      render({ data, error, loading })
    }
  </Query>
)

const subcategories = ({ render }) => (
  <Query query={GET_SUBCATEGORIES}>
    {({ data, error, loading, }) =>
      render({ data, error, loading })
    }
  </Query>
)

const ItemContainer = adopt({
  createItem,
  subcategories,
  locations
});

export default ItemContainer
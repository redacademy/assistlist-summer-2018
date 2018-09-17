import React, { Component } from 'react';
import Listings from './Listings';
import { Text } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import LoadingIndicator from '../../components/LoadingIndicator';
import { GET_ITEMS } from '../../config/queries';
import { fonts, colors } from '../../config/styles';
import { Dimensions, Image } from 'react-native';
import AssistListHeader from '../../components/AssistListHeader';
const { height, width } = Dimensions.get('window');

export default class ListingsContainer extends Component {
  static navigationOptions = {
    headerTitle: <AssistListHeader />,
    title: 'AssistList',
    headerStyle: {
      height: height / 11,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.lightBlue,
    },
    headerTitleStyle: {
      fontFamily: fonts.nunito,
      color: colors.darkBlue,
      fontSize: 25,
      fontWeight: '900',
    },
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

import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import SingleListing from './SingleListing';
import LoadingIndicator from '../../components/LoadingIndicator';
import { GET_ITEM, CREATE_CHAT } from '../../config/queries';
import UserContext from '../../context/UserContext';

export default class SingleListingContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {values => {
          return (
            <Query
              query={GET_ITEM}
              variables={{ id: this.props.navigation.getParam('id') }}
            >
              {({ data: { Item }, loading, error }) => {
                if (loading) return <LoadingIndicator />;
                if (error) console.log(error);
                return (
                  <Mutation
                    mutation={CREATE_CHAT}
                    onCompleted={(data, loading) => {
                      if (loading) return <LoadingIndicator />;
                      data &&
                        this.props.navigation.navigate('Chat', {
                          chatId: data.createChat.id,
                          item: Item,
                        });
                    }}
                  >
                    {createChat => {
                      return (
                        <SingleListing
                          createChat={async () =>
                            await createChat({
                              variables: {
                                participantsIdOne: values.currentUser.id,
                                participantsIdTwo: Item.user.id,
                                itemId: Item.id,
                              },
                            })
                          }
                          itemData={Item}
                        />
                      );
                    }}
                  </Mutation>
                );
              }}
            </Query>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

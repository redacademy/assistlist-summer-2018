import React, { Component } from 'react';
import Messages from './Messages';
import { Query, Subscription } from 'react-apollo';
import LoadingIndicator from '../../components/LoadingIndicator';
import ChatMenu from '../../components/ChatMenu';
import { USER_CHATS, CHATS_SUBSCRIPTION } from '../../config/queries';
import UserContext from '../../context/UserContext';
export default class MessagesContainer extends Component {
  static navigationOptions = {
    title: 'Messages',
    headerRight: <ChatMenu />,
  };
  render() {
    return (
      <UserContext.Consumer>
        {userData => {
          return (
            <Query
              query={USER_CHATS}
              variables={{ id: userData.currentUser.id }}
            >
              {({ data: { allChats }, loading, error, refetch }) => {
                if (loading) return <LoadingIndicator />;
                if (error) return console.log(error);
                return (
                  <Subscription
                    subscription={CHATS_SUBSCRIPTION}
                    variables={{
                      userId: userData.currentUser.id,
                    }}
                    onSubscriptionData={() => refetch()}
                  >
                    {({ data }) => {
                      return (
                        <Messages
                          data={allChats}
                          navigation={this.props.navigation}
                        />
                      );
                    }}
                  </Subscription>
                );
              }}
            </Query>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

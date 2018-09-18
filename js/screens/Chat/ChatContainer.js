import React, { Component, Fragment } from 'react';
import ChatBox from './Chat';
import ChatInput from '../../components/ChatInput'
import UserContext from '../../context/UserContext';
import { Mutation, Subscription, Query } from 'react-apollo';
import { View, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import LoadingIndicator from '../../components/LoadingIndicator';
import {
  CREATE_MESSAGE,
  CHAT_MESSAGES,
  MESSAGES_SUBSCRIPTION,
} from '../../config/queries';

export default class ChatContainer extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {values => {
          return (
            <View style={styles.container} >
              <Query
                query={CHAT_MESSAGES}
                variables={{
                  chatId: this.props.navigation.getParam('chatId'),
                }}
              >
                {({ data: { allMessages }, error, loading, refetch }) => {
                  if (loading)
                    return (
                      <View style={styles.loading}>
                        <LoadingIndicator />
                      </View>
                    );
                  if (error) {
                    console.log(error);
                  }
                  return (
                    <Fragment>
                      <Subscription
                        subscription={MESSAGES_SUBSCRIPTION}
                        variables={{
                          chatId: this.props.navigation.getParam('chatId'),
                        }}
                        onSubscriptionData={() => refetch()}
                      >
                        {({ data }) => {
                          return (
                            <ChatBox
                              messages={allMessages}
                              currentUser={values.currentUser.id}
                              item={this.props.navigation.getParam('item')}
                            />
                          );
                        }}
                      </Subscription>
                      <Mutation
                        mutation={CREATE_MESSAGE}
                        refetchQueries={res => [
                          {
                            query: CHAT_MESSAGES,
                            variables: {
                              chatId: this.props.navigation.getParam('chatId'),
                            },
                          },
                        ]}
                      >
                        {createMessage => {
                          return (
                            <ChatInput
                              navigation={this.props.navigation}
                              currentUser={values.currentUser.id}
                              createMessage={createMessage}
                              messages={allMessages}
                              item={this.props.navigation.getParam('item')}
                            />
                          );
                        }}
                      </Mutation>
                    </Fragment>
                  );
                }}
              </Query>
            </View>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

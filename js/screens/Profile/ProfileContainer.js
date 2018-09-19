import React, { Component } from 'react';
import Profile from './Profile';
import UserContext from '../../context/UserContext';
import { Query, Mutation } from 'react-apollo';
import { GET_USER, UPDATE_PROFILE_PIC } from '../../config/queries';
import { Text } from 'react-native';
import LoadingIndicator from '../../components/LoadingIndicator';

export default class ProfileContainer extends Component {
  static navigationOptions = {
    title: 'My Profile',
  };
  render() {
    return (
      <UserContext.Consumer>
        {values => {
          return (
            <Query query={GET_USER} variables={{ id: values.currentUser.id }}>
              {({ data: { allUsers }, loading, error }) => {
                if (loading) return <LoadingIndicator />;
                if (error) return <Text>Error :</Text>;
                return (
                  <Mutation mutation={UPDATE_PROFILE_PIC}>
                    {(updateUser, { loading, error }) => (
                      <Profile
                        navigation={this.props.navigation}
                        user={allUsers}
                        updateUser={updateUser}
                        userID={values.currentUser.id}
                      />
                    )}
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

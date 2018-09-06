import React, { Component } from 'react';
import AccountForm from './AccountForm';
import AuthContainer from '../../containers/AuthContainer';

export default class AccountFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: false,
    };
  }
  toggleFormState = () => {
    this.setState({
      formState: !this.state.formState,
    });
  };
  render() {
    return (
      <AuthContainer>
        {({ signup, login }) => (
          <AccountForm
            formState={this.state.formState}
            toggleForm={() => this.toggleFormState()}
            signup={signup}
            login={login}
            navigation={this.props.navigation}
          />
        )}
      </AuthContainer>
    );
  }
}

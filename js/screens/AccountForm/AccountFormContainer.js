import React, { Component } from 'react';
import AccountForm from './AccountForm'

export default class AccountFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formState: false
    }
  }
  toggleFormState = () => {
    this.setState({
      formState: !this.state.formState
    })
  }
  render() {
    return (
      <AccountForm formState={this.state.formState} toggleForm={() => this.toggleFormState()}/>
    );
  }
}

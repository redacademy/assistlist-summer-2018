import React, { Component } from 'react';
import Login from './Login'

export default class LoginContainer extends Component {
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
      <Login formState={this.state.formState} toggle={() => this.toggleFormState()}/>
    );
  }
}

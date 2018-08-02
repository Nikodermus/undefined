import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class ErrorBoundary extends Component {
  static propTypes = {};

  state = {
    has_error: false,
    message: '',
  };

  componentDidCatch(error, info) {
    this.setState({
      has_error: true,
      message: info,
    });
  }

  render() {
    const { has_error, message } = this.state;
    const { children } = this.props;
    if (has_error) {
      setTimeout(() => {
        this.setState({ has_error: false });
      }, 0);
      return <Redirect to={`/oops/${message}`} message={message} />;
    }
    return children;
  }
}

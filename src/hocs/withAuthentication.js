import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { setAuthUser } from 'actions';

import withFirebase from './withFirebase';

const mapDispatchToProps = dispatch => ({
  onSetAuthUser: authUser => {
    console.log(JSON.stringify(authUser, null, 2));
    return dispatch(setAuthUser(authUser));
  },
});

const withAuthentication = Component => {
  class AuthContainer extends React.Component {
    componentDidMount() {
      const { firebase, onSetAuthUser } = this.props;

      this.listener = firebase.auth.onAuthStateChanged(
        onSetAuthUser,
        e => console.log(e),
      )
    }

  componentWillUnmount() {
      this.listener();
    }

    render() {
      return <Component {...this.props} />
    }
  }

  return compose(
    withFirebase,
    connect(null, mapDispatchToProps),
  )(AuthContainer);
}

export default withAuthentication;
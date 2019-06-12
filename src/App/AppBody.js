import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { compose } from 'recompose';

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Landing from 'containers/Landing';
import Login from 'containers/Login';
import withFirebase from 'hooks/withFirebase';

import SessionContext from 'components/SessionContext'

import AppBar from './AppBar'

const styles = theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class AppBody extends Component {
  state = {
    authUser: null,
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(
      authUser => {
        authUser
          ? this.setState({ authUser })
          : this.setState({ authUser: null });
      },
    );
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <SessionContext.Provider value={this.state.authUser}>
        <AppBar />
        <Container className={this.props.classes.container} fixed>
          <Switch>
            <Route path='/landing' component={Landing} />
            <Route path='/login' component={Login} />
            <Redirect to='/landing' />
          </Switch>
        </Container>
      </SessionContext.Provider>
    )
  }
}

export default compose(
  withStyles(styles, { withTheme: true }),
  withFirebase
)(AppBody)
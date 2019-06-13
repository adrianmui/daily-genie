import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Landing from 'containers/Landing';
import Login from 'containers/Login';
import withAuthentication from 'hocs/withAuthentication';

import AppBar from './AppBar'

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function AppBody() {
  const classes = useStyles()

  return (
    <div>
      <AppBar />
      <Container className={classes.container} fixed>
        <Switch>
          <Route path='/landing' component={Landing} />
          <Route path='/login' component={Login} />
          <Redirect to='/landing' />
        </Switch>
      </Container>
    </div>
  )
}

export default withAuthentication(AppBody)
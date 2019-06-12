import React from 'react'
import { Redirect } from 'react-router-dom';
import { compose } from 'recompose';

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import google from 'google.svg'

import SessionContext from 'components/SessionContext';
import withFirebase from 'hooks/withFirebase';

const styles = theme => ({
  fab: {
    margin: theme.spacing(1),
    backgroundColor: '#fafafa',
    color: theme.palette.primary['dark'],
    fontWeight: 'strong',
  },
  icon: {
    width: '1rem',
    height: '1rem',
    marginRight: theme.spacing(1),
  },
});

function Login({ firebase, classes }) {
  return (
    <SessionContext.Consumer>
      {authUser => authUser ? (
          <Redirect to='/landing'/>
        ) : (
        <Fab 
            variant="extended" 
            className={classes.fab}
            onClick={firebase.onGoogleSignIn} >
          <img 
              src={google} 
              alt='google' 
              className={classes.icon} />
          Sign In With Google
        </Fab>
      )}
    </SessionContext.Consumer>
  )
}

export default compose(
  withStyles(styles, { withTheme: true }),
  withFirebase,
)(Login)
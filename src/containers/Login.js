import React from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

import google from 'google.svg'

import withFirebase from 'hocs/withFirebase';

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

const mapStateToProps = ({ userState: { authUser } }) => ({ authUser });

function Login({ firebase, authUser, classes }) {
  if (authUser) {
    return <Redirect to='/landing' />
  }
  return  (
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
  )
}

export default compose(
  withStyles(styles, { withTheme: true }),
  withFirebase,
  connect(mapStateToProps),
)(Login)
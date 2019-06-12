import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ButtonLink from 'components/ButtonLink';
import SessionContext from 'components/SessionContext';
import withFirebase from 'hooks/withFirebase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    textAlign: 'left',
    marginLeft: '1rem',
    flexGrow: 1,
  },
}));

function ButtonAppBar({ firebase }) {
  const classes = useStyles();

  return (
    <SessionContext.Consumer>
      {authUser => {
        console.log(JSON.stringify(authUser, null, 2))
        return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Daily Genie
              </Typography>
                {authUser && (
                  <Button color="inherit" onClick={firebase.onSignOut}>Sign Out</Button>
                )}
            </Toolbar>
          </AppBar>
        </div>
      )}}
    </SessionContext.Consumer>
  );
}
export default withFirebase(ButtonAppBar)
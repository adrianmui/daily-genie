import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import ButtonLink from 'components/ButtonLink';
import withFirebase from 'hocs/withFirebase';

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

const mapStateToProps = ({ userState: { authUser } }) => ({ authUser });

function ButtonAppBar({ firebase, authUser }) {
  const classes = useStyles();

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
  );
}

export default compose(
  withFirebase,
  connect(mapStateToProps),
)(ButtonAppBar)
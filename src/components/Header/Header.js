import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = () => {

    const classes = useStyles();

    return (
        <div>
             <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="#039be5" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title} style={{textAlign: 'center',fontFamily: 'Grandstander',fontSize:"25px"}}>
           Social-Buddy
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
        </div>
    );
};

export default Header;
import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

{const theme = createAppApp({
  
  palette: {
    primary: {
      main: '#4dd0e1',
    },
    secondary: {
      main: '#1976d2',
    },
  },

});
{/* //Styling */}
const useStyles = makeStyles(theme => ({
root: {
  flexGrow: 1
},
menuButton: {
  marginRight: theme.spacing(2)
},
title: {
  flexGrow: 1
}
}));
const styles = {
fontFamily: "sans-serif",
textAlign: "center"
};
const section = {
height: "100%",
paddingTop: 5,
backgroundColor: "#fff"
};
const summary = {
marginTop: 15,
marginBottom: 15,
padding: 10,
backgroundColor: "#d4d4d4"
};

class App extends Component {
  render() {

    const [open, setOpen] = React.useState(false);

    function handleClickOpen() {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
  
    return (
//Navbar
export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleChange(event) {
    setAuth(event.target.checked);
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }


    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            App-App
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                {/* <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Sign up</MenuItem> */}
                </Menu>
            </div>
          )}

<div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Log in or Sign Up
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <DialogContentText>
           Username
          </DialogContentText>
          <DialogContentText>
           Password
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Username"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Log In
          </Button>
          <Button onClick={handleClose} color="primary">
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
        </Toolbar>
      </AppBar>
  </div>
  );
}

//Grid

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>m=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>m=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>m=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>m=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>m=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>m=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>m=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>m=4</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>m=4</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

 export default App;


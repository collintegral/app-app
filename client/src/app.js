import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar is-mobile" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="/assets/images/Logo.png" />
            </a>
          </div>
          {/* Hamburger */}
          {/* <a role="button" id="burger" className="navbar-burger burgeris-mobile" aria-label="menu" aria-expanded="false"
          data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>}
      </div> */}
          <div id="navbarMenu" className="navbar-menu is-pulled-left is-mobile">
            <div className="navbar-start is-mobile">
              <div className="navbar-item is-hoverable is-mobile">
                <a href="#" className="navbar is-mobile">
                  The App-App
                </a>
                <div className="navbar is-mobile">
                  <a href="#" className="navbar-item is-mobile">
                  </a>
                  <hr className="navbar-divider is-mobile" />
                </div>
              </div>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                {/* <!--Modal--> */}
                <div id="image-modal" className="modal" modalDlg={document.querySelector('#image-modal')}>
                  <div className="modal-background"></div>
                  <div className="modal-content">
                    <div className="modal-card">
                      {/* <!----> */}
                      <article className="message">
                        <div className="message-header">
                          <p>Welcome!</p>
                        </div>
                        <div className="message-body">
                          <form action="/api/login" method="post">
                            <div>
                              <label>Email:</label>
                              <input type="text" name="email" id="loginemail" />
                            </div>
                            <div>
                              <label>Password:</label>
                              <input type="password" name="password" id="loginpassword" />
                            </div>
                            <div>
                              <input type="submit" value="Log In" />
                            </div>
                          </form>
                        </div>
                      </article>
                      {/* <!----> */}
                    </div>
                  </div>
                  <button id="image-modal-close" className="modal-close" imageModalCloseBtn={document.querySelector('#image-modal-close')}></button>
                </div>
                <br />

                <button className="button" id="showModal"  btn={document.querySelector('#showModal')}
                  {btn.addEventListener('click', () => {
                    modalDlg.classList.add('is-active')
                  })}>
                  Log In
                  </button>

                <button className="button modal-button" id="showModal">Log In</button>

              </div>
              <div className="navbar-item">
                {/* <!--Modal--> */}
                <div id="image-modal1" className="modal">
                  <div className="modal-background"></div>
                  <div className="modal-content">
                    <div className="modal-card">
                      {/* <!---->  */}
                      <article className="message">
                        <div className="message-header">
                          <p>Create Your Free Account</p>
                        </div>
                        <div className="message-body">
                          <form id="sign-up-form">
                            <div>
                              <label>Email:</label>
                              <input type="text" name="email" id="email" />
                            </div>
                            <div>
                              <label>Username:</label>
                              <input type="text" name="username" id="username" />
                            </div>
                            <div>
                              <label>Password:</label>
                              <input type="password" name="password" id="password" />
                            </div>
                            <div>
                              <label>Confirm Password:</label>
                              <input type="password" name="confpassword" id="confpassword" />
                            </div>
                            <div>
                              <input type="submit" value="Sign Up" id="sign-up-btn" />
                            </div>
                          </form>
                          <p id="errors"></p>
                        </div>
                      </article>
                      {/* <!----> */}
                    </div>
                  </div>
                  <button id="image-modal-close1" className="modal-close"></button>
                </div>
                
                <br />
                <button className="button modal-button" id="showModal1">Sign Up</button>
              </div>
            </div>
          </div>
        </nav >
        {/* <!--Will be draggable components, static for now--> */}
        < nav className="navbar is-mobile" role="navigation" aria-label="main navigation" >
          {/* <!-- Hamburger --> */}


//Colors
const theme = createAppApp({
  
    palette: {
      primary: {
        main: '#4dd0e1',
      },
      secondary: {
        main: '#1976d2',
      },
    },
  
});
//Styling
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

  return (
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
                <MenuItem onClick={handleClose}>Login</MenuItem>
                <MenuItem onClick={handleClose}>Sign up</MenuItem>
                </Menu>
            </div>
          )}
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

// export default App;


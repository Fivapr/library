import React, { Component } from "react";
import { render } from "react-dom";
import Button from "material-ui/Button";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import purple from "material-ui/colors/purple";
import red from "material-ui/colors/red";

import { createMuiTheme } from "material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

const container = {
  margin: "0 auto"
};

class Header extends Component {
  linkToHome = () => {
    this.props.history.push("/");
  };
  linkToMovies = () => {
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <AppBar
          position="static"
          color="default"
          style={{ backgroundColor: theme.palette.secondary.light }}
        >
          <Toolbar>
            <Typography variant="title" color="inherit">
              Movie searcher app
            </Typography>
            <Typography
              variant="title"
              color="inherit"
              onClick={this.linkToHome}
            >
              Home
            </Typography>
            <Typography
              variant="title"
              color="inherit"
              onClick={this.linkToMovies}
            >
              Movies
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(Header);
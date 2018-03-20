import React, { Component } from "react";
import * as actions from "./Actions";
import { connect } from "react-redux";
import { Typography } from "material-ui";
import propTypes from "prop-types";

const container = {
  maxWidth: 1000,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column"
};

const mapDispatchToProps = dispatch => ({
  fetchRequestToken: () => {
    dispatch(actions.FETCH_REQUEST_TOKEN());
  },
  fetchSessionId: () => {
    dispatch(actions.FETCH_SESSION_ID());
  }
});

class Auth extends Component {
  componentDidMount() {
    this.props.fetchRequestToken();
  }

  render() {
    return (
      <div style={container}>
        <Typography
          variant="headline"
          color="inherit"
          style={{ margin: 20, fontSize: 30 }}
        >
          You need to sign in here!
        </Typography>
      </div>
    );
  }
}

Home.propTypes = {
  fetchRequestToken: propTypes.function
};

export default connect(null, mapDispatchToProps)(Auth);

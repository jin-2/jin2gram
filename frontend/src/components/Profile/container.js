import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  static propTypes = {
    username: PropTypes.string,
    profile: PropTypes.object,
    getProfile: PropTypes.func
  };
  componentDidMount() {
    const { username, getProfile } = this.props;
    getProfile(username);
  }
  render() {
    return <Profile profile={this.props.profile} />;
  }
}

export default Container;

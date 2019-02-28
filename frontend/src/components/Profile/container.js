import React, { Component } from "react";
import PropTypes from "prop-types";
import Profile from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    profile: PropTypes.object,
    getUsername: PropTypes.func
  };
  componentDidMount() {
    const { getUsername } = this.props;
    getUsername();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.profile) {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    return (
      <Profile profile={this.props.profile} loading={this.state.loading} />
    );
  }
}

export default Container;

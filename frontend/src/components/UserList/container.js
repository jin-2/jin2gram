import React, { Component } from "react";
import PropTypes from "prop-types";
import UserList from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    usersList: PropTypes.array
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.usersList) {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    return <UserList {...this.state} {...this.props} />;
  }
}

export default Container;

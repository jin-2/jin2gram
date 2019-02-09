import React, { Component } from "react";
import PropTypes from "prop-types";
import Explore from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getExplore: PropTypes.func.isRequired,
    usersList: PropTypes.array
  };
  componentDidMount() {
    const { getExplore, usersList } = this.props;
    if (!usersList) {
      getExplore();
    } else {
      this.setState({
        loading: false
      });
    }
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.usersList) {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { usersList } = this.props;
    return <Explore {...this.state} usersList={usersList} />;
  }
}

export default Container;

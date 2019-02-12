import React, { Component } from "react";
import PropTypes from "prop-types";
import Search from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    usersList: PropTypes.array,
    imageList: PropTypes.array,
    searchByTerm: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.searchByTerm();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.match.params.searchTerm !== this.props.match.params.searchTerm
    ) {
      this.props.searchByTerm();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.usersList || nextProps.imageList) {
      this.setState({
        loading: false
      });
    }
  }
  render() {
    const { usersList, imageList } = this.props;
    return (
      <Search {...this.state} userList={usersList} imageList={imageList} />
    );
  }
}

export default Container;

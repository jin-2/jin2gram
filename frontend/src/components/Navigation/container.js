import React, { Component } from "react";
import PropTypes from "prop-types";
import Navigation from "./presenter";

class Container extends Component {
  state = {
    term: ""
  };
  static propTypes = {
    username: PropTypes.string.isRequired,
    goToSearch: PropTypes.func.isRequired,
    goToProfile: PropTypes.func.isRequired
  };
  render() {
    return (
      <Navigation
        value={this.state.term}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        goToProfile={this._goToProfile}
        loginName={this.props.username}
      />
    );
  }
  _handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      term: value
    });
  };
  _handleSubmit = event => {
    event.preventDefault();
    const { term } = this.state;
    const { goToSearch } = this.props;
    goToSearch(term);
    this.setState({
      term: ""
    });
  };
  _goToProfile = () => {
    const { goToProfile, username } = this.props;
    goToProfile(username);
  };
}

export default Container;

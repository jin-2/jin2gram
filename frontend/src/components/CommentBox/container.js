import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentBox from "./presenter";

class Container extends Component {
  state = {
    comment: ""
  };
  static propTypes = {
    photoId: PropTypes.number.isRequired,
    submitComment: PropTypes.func.isRequired
  };
  render() {
    return (
      <CommentBox
        {...this.state}
        handleInputChange={this._handleInputChange}
        handleInputKeyPress={this._handleInputKeyPress}
      />
    );
  }

  _handleInputChange = event => {
    const { value } = event.target;
    this.setState({
      comment: value
    });
  };

  _handleInputKeyPress = event => {
    const { key } = event;
    const { submitComment } = this.props;
    const { comment } = this.state;
    if (key === "Enter") {
      event.preventDefault();
      submitComment(comment);
      this.setState({
        comment: ""
      });
    }
  };
}

export default Container;

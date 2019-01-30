import React, { Component } from "react";
import CommentBox from "./presenter";

class Container extends Component {
  state = {
    comment: ""
  };
  render() {
    return (
      <CommentBox
        comment={this.state.comment}
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
    console.log("keypress", event.key);
    if (key === "Enter") {
      event.preventDefault();
    }
  };
}

export default Container;

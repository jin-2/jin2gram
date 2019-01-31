import React, { Component } from "react";
import PropTypes from "prop-types";
import FeedPhoto from "./presenter";

class Container extends Component {
  state = {
    seeingLikes: false
  };

  static propTypes = {
    getPhotoLikes: PropTypes.func.isRequired
  };

  render() {
    return (
      <FeedPhoto
        {...this.state}
        {...this.props}
        openLikes={this._openLikes}
        closeLikes={this._closeLikes}
      />
    );
  }

  _openLikes = () => {
    const { getPhotoLikes } = this.props;
    this.setState({
      seeingLikes: true
    });
    getPhotoLikes();
  };

  _closeLikes = () => {
    this.setState({
      seeingLikes: false
    });
  };
}

export default Container;

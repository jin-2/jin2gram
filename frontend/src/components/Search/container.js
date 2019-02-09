import React, { Component } from "react";
import Search from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  render() {
    return <Search {...this.state} />;
  }
}

export default Container;

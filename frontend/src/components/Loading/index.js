import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const Loading = (props, context) => (
  <div className={styles.loading}>
    <img src={require("images/loading.png")} alt={context.t("Loading")} />
  </div>
);

Loading.contextTypes = {
  t: PropTypes.func.isRequired
};

export default Loading;

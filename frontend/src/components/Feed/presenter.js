import React from "react";
import PropTypes from "prop-types";
import Loading from "../Loading";
import styles from "./styles.scss";

const Feed = (props, context) => {
  const loading = this.props;
  return loading ? "feed" : <LoadingFeed />;
};

const LoadingFeed = props => (
  <div className={styles.feed}>
    <Loading />
  </div>
);

Feed.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Feed;

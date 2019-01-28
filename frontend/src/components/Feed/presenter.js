import React from "react";
import PropTypes from "prop-types";
import Loading from "../Loading";
import styles from "./styles.scss";

const Feed = (props, context) => {
  const { loading, feed } = props;
  if (loading) {
    return <LoadingFeed />;
  } else if (feed) {
    return <RenderFeed {...props} />;
  }
};

const LoadingFeed = props => (
  <div className={styles.feed}>
    <Loading />
  </div>
);

const RenderFeed = props => (
  <div>
    {props.feed.map(post => (
      <p key={post.id}>{post.caption}</p>
    ))}
  </div>
);

Feed.propTypes = {
  loading: PropTypes.bool.isRequired,
  feed: PropTypes.array
};

export default Feed;

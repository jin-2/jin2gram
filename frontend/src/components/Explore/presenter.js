import React from "react";
import PropTypes from "prop-types";
import Loading from "../Loading";
import styles from "./styles.scss";
import UserDisplay from "../UserDisplay";

const Explore = (props, context) => {
  const { loading, usersList } = props;
  if (loading) {
    return <LoadingUsers />;
  } else if (usersList) {
    return <RenderUsers {...props} />;
  }
};

const LoadingUsers = props => (
  <div className={styles.explore}>
    <Loading />
  </div>
);

const RenderUsers = props => (
  <ul className={styles.exploreList}>
    {props.usersList.map(user => (
      <li key={user.id}>
        <UserDisplay {...user} />
      </li>
    ))}
  </ul>
);

Explore.propTypes = {
  loading: PropTypes.bool.isRequired,
  usersList: PropTypes.array
};

export default Explore;

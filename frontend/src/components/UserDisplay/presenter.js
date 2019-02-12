import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const UserDisplay = (props, context) => (
  <div className={`${styles.userItem} ${props.vertical && styles.vertical}`}>
    {console.log(props)}
    <div className={styles.userImg}>
      <img
        src={props.propfile_image || require("images/noPhoto.jpg")}
        alt={props.name}
      />
    </div>
    <p className={styles.userText}>
      <span className={styles.userId}>{props.username}</span>
      <span className={styles.userDesc}>{props.name}</span>
    </p>
    <div className={styles.userAction}>
      <button
        type="button"
        className={styles.followBtn}
        onClick={props.handleClick}
      >
        {props.following ? context.t("Unfollowing") : context.t("Following")}
      </button>
    </div>
  </div>
);

UserDisplay.contextTypes = {
  t: PropTypes.func.isRequired
};

UserDisplay.propTypes = {
  id: PropTypes.number.isRequired,
  propfile_image: PropTypes.string,
  username: PropTypes.string.isRequired,
  name: PropTypes.string,
  following: PropTypes.bool.isRequired,
  vertical: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

export default UserDisplay;

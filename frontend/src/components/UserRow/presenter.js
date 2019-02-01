import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const UserRow = (props, context) => (
  <div className={styles.userItem}>
    {console.log("user-row-data: ", props)}
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
      <button type="button" className={styles.followBtn}>
        {context.t("Follow")}
      </button>
    </div>
  </div>
);

UserRow.contextTypes = {
  t: PropTypes.func.isRequired
};

export default UserRow;

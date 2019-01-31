import React from "react";
import PropTypes from "prop-types";
import IconClose from "react-ionicons/lib/MdClose";
import styles from "./styles.scss";
import Loading from "../Loading";

const UserList = (props, context) => (
  <div className={styles.dim}>
    <section className={styles.popup}>
      <header className={styles.popupHeader}>
        <h1 className={styles.popupTitle}>{props.title}</h1>
        <button
          type="button"
          className={styles.popupClose}
          onClick={props.closeLikes}
        >
          <IconClose fontSize="30px" color="#262626" />
        </button>
      </header>
      <div className={styles.popupContent}>{props.loading && <Loading />}</div>
    </section>
  </div>
);

UserList.contextTypes = {
  t: PropTypes.func.isRequired
};

UserList.propTypes = {
  loading: PropTypes.bool.isRequired,
  closeLikes: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default UserList;

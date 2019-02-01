import React from "react";
import PropTypes from "prop-types";
import IconClose from "react-ionicons/lib/MdClose";
import styles from "./styles.scss";
import Loading from "../Loading";
import UserRow from "../UserRow";

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
          <IconClose fontSize="30px" color="#666" />
        </button>
      </header>
      <div className={styles.popupContent}>
        {props.loading ? (
          <ListLoading />
        ) : (
          <UserItems usersList={props.usersList} />
        )}
      </div>
    </section>
  </div>
);

const ListLoading = () => (
  <div className={styles.loadingWrap}>
    <Loading />
  </div>
);

const UserItems = props => (
  <div>
    <ul>
      {props.usersList.map(user => (
        <UserRow {...user} key={user.id} />
      ))}
    </ul>
  </div>
);

UserList.contextTypes = {
  t: PropTypes.func.isRequired
};

UserItems.propTypes = {
  usersList: PropTypes.array
};

UserList.propTypes = {
  loading: PropTypes.bool.isRequired,
  closeLikes: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  usersList: PropTypes.array
};

export default UserList;

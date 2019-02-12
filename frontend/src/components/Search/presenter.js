import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "../Loading";
import UserDisplay from "../UserDisplay";
import ImageDisplay from "../ImageDisplay";

const Search = (props, context) => {
  if (props.loading) {
    return <SearchLoading />;
  } else {
    return (
      <div className={styles.searchWrap}>
        <section>
          <h2 className={styles.searchTitle}>Users</h2>
          {!props.loading && props.userList.length < 1 && <NotFound />}
          {!props.loading && props.userList.length > 0 && (
            <UserList list={props.userList} />
          )}
        </section>
        <section>
          <h2 className={styles.searchTitle}>Photos</h2>
          {!props.loading && props.imageList.length < 1 && <NotFound />}
          {!props.loading && props.imageList.length > 0 && (
            <ImageList list={props.imageList} />
          )}
        </section>
      </div>
    );
  }
};

const UserList = props => (
  <div>
    {props.list.map(user => (
      <UserDisplay {...user} key={user.id} vertical={true} />
    ))}
  </div>
);

const ImageList = props => (
  <div className={styles.imageList}>
    {props.list.map(image => (
      <ImageDisplay key={image.id} image={image} />
    ))}
  </div>
);

const NotFound = props => {
  const message = props.message || "Nothing Found :(";
  return <p className={styles.notFound}>{message}</p>;
};

const SearchLoading = () => (
  <div className={styles.searchLoading}>
    <Loading />
  </div>
);

Search.propTypes = {
  loading: PropTypes.bool.isRequired,
  userList: PropTypes.array,
  imageList: PropTypes.array
};

export default Search;

import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";
import Loading from "../Loading";

const Search = (props, context) => {
  if (props.loading) {
    return <SearchLoading />;
  }
};

const SearchLoading = () => (
  <div className={styles.searchLoading}>
    <Loading />
  </div>
);

Search.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Search;

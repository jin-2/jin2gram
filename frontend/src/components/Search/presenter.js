import React from "react";
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

export default Search;

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import IconCompass from "react-ionicons/lib/MdCompass";
import IconHeart from "react-ionicons/lib/MdHeart";
import IconPerson from "react-ionicons/lib/MdPerson";
import styles from "./styles.scss";

const Navigation = (props, context) => (
  <div className={styles.header}>
    <header className={styles.inner}>
      <div className={styles.headerLogo}>
        <h1 className={styles.lgoo}>
          <Link to="/">
            <img src={require("images/instagram2.png")} alt="Instagram" />
          </Link>
        </h1>
      </div>
      <div className={styles.headerSearch}>
        <form className={styles.searchForm} onSubmit={props.handleSubmit}>
          <input
            type="search"
            placeholder={context.t("Search")}
            className={styles.input}
            value={props.value}
            onChange={props.handleInputChange}
          />
        </form>
      </div>
      <div className={styles.headerLinks}>
        <Link to="/explore" className={styles.iconWrap}>
          <IconCompass fontSize="30px" color="#333" />
        </Link>
        <span className={styles.iconWrap}>
          <IconHeart fontSize="30px" color="#333" />
        </span>
        <span className={styles.iconWrap} onClick={props.goToProfile}>
          <IconPerson fontSize="30px" color="#333" />
        </span>
      </div>
    </header>
  </div>
);

Navigation.contextTypes = {
  t: PropTypes.func.isRequired
};

Navigation.propTypes = {
  value: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  goToProfile: PropTypes.func.isRequired
};

export default Navigation;

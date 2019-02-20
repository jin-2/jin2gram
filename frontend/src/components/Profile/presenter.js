import React from "react";
import PropTypes from "prop-types";
import IosCog from "react-ionicons/lib/IosSettingsOutline";
import styles from "./styles.scss";

// todo
// - loading
// - other people profile

const Profile = (props, context) => (
  <div className={styles.profile}>
    <div className={styles.profileHeader}>
      <div className={styles.profileImg}>
        <span className={styles.imgWrap}>
          <img
            src={props.profile.profile_image || require("images/noPhoto.jpg")}
            alt=""
          />
        </span>
      </div>
      <div className={styles.profileText}>
        <div className={styles.nameWrap}>
          <h2 className={styles.name}>{props.profile.username}</h2>
          <div className={styles.personalAction}>
            <button type="button" className={styles.editBtn}>
              {context.t("Edit Profile")}
            </button>
            <button type="button" className={styles.settingBtn}>
              <IosCog fontSize="30px" />
            </button>
          </div>
        </div>
        <ul className={styles.countingList}>
          <li>
            <strong className={styles.value}>{props.profile.post_count}</strong>
            <span className={styles.label}>{context.t(" posts")}</span>
          </li>
          <li>
            <strong className={styles.value}>
              {props.profile.follower_count}
            </strong>
            <span className={styles.label}>{context.t(" followers")}</span>
          </li>
          <li>
            <strong className={styles.value}>
              {props.profile.following_count}
            </strong>
            <span className={styles.label}>{context.t(" following")}</span>
          </li>
        </ul>
        <p className={styles.desc}>
          <strong className={styles.nickname}>{props.profile.name}</strong>
          {props.profile.bio}
        </p>
        <p className={styles.website}>
          <a
            href={props.profile.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.profile.website}
          </a>
        </p>
      </div>
    </div>
    <div>
      <ul>
        <li>{context.t("POSTS")}</li>
      </ul>
    </div>
    <div>post list(tab contents)</div>
  </div>
);

Profile.contextTypes = {
  t: PropTypes.func.isRequired
};

Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string,
    name: PropTypes.string,
    profile_image: PropTypes.string,
    website: PropTypes.string,
    bio: PropTypes.string,
    post_count: PropTypes.number,
    follower_count: PropTypes.number,
    following_count: PropTypes.number,
    images: PropTypes.array
  }).isRequired
};

export default Profile;

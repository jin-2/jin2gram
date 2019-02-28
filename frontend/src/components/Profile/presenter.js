import React from "react";
import PropTypes from "prop-types";
import IosCog from "react-ionicons/lib/IosSettingsOutline";
import IosGrid from "react-ionicons/lib/MdGrid";
import styles from "./styles.scss";
import Loading from "../Loading";
import ImageDisplay from "../ImageDisplay";

// todo
// - loading
// - other people profile

const Profile = (props, context) => {
  if (props.loading) {
    return <Loading />;
  } else {
    return (
      <div className={styles.profile}>
        <ProfileHeader {...props.profile} />
        <ProfileTab />
        <Posts list={props.profile.images} />
      </div>
    );
  }
};

const ProfileHeader = (props, context) => (
  <div className={styles.profileHeader}>
    <div className={styles.profileImg}>
      <span className={styles.imgWrap}>
        <img
          src={props.profile_image || require("images/noPhoto.jpg")}
          alt=""
        />
      </span>
    </div>
    <div className={styles.profileText}>
      <div className={styles.nameWrap}>
        <h2 className={styles.name}>{props.username}</h2>
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
          <strong className={styles.value}>{props.post_count}</strong>
          <span className={styles.label}>{context.t(" posts")}</span>
        </li>
        <li>
          <strong className={styles.value}>{props.follower_count}</strong>
          <span className={styles.label}>{context.t(" followers")}</span>
        </li>
        <li>
          <strong className={styles.value}>{props.following_count}</strong>
          <span className={styles.label}>{context.t(" following")}</span>
        </li>
      </ul>
      <p className={styles.desc}>
        <strong className={styles.nickname}>{props.name}</strong>
        {props.bio}
      </p>
      <p className={styles.website}>
        <a href={props.website} target="_blank" rel="noopener noreferrer">
          {props.website}
        </a>
      </p>
    </div>
  </div>
);

const ProfileTab = (props, context) => (
  <ul className={styles.tab}>
    <li className={styles.tabItem}>
      <IosGrid fontSize="16px" color="#535353" className={styles.icon} />
      <IosGrid fontSize="26px" color="#535353" className={styles.iconBig} />
      <span className={styles.text}>{context.t("POSTS")}</span>
    </li>
  </ul>
);

const Posts = props => (
  <div className={styles.imageList}>
    {props.list.map(image => (
      <ImageDisplay key={image.id} image={image} />
    ))}
  </div>
);

ProfileHeader.contextTypes = {
  t: PropTypes.func.isRequired
};
ProfileTab.contextTypes = {
  t: PropTypes.func.isRequired
};

Profile.propTypes = {
  loading: PropTypes.bool.isRequired,
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

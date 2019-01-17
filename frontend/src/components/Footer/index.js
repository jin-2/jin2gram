import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Footer = (props, context) => (
    <footer className={styles.footer}>
        <nav className={styles.footerNav}>
            <ul className={styles.footerList}>
                <li className={styles.footerItem}>{context.t("About Us")}</li>
                <li className={styles.footerItem}>{context.t("Support")}</li>
                <li className={styles.footerItem}>{context.t("Press")}</li>
                <li className={styles.footerItem}>{context.t("API")}</li>
                <li className={styles.footerItem}>{context.t("Jobs")}</li>
                <li className={styles.footerItem}>{context.t("Privacy")}</li>
                <li className={styles.footerItem}>{context.t("Terms")}</li>
                <li className={styles.footerItem}>{context.t("Directory")}</li>
                <li className={styles.footerItem}>{context.t("Profiles")}</li>
                <li className={styles.footerItem}>{context.t("Hashtag")}</li>
                <li className={styles.footerItem}>{context.t("Language")}</li>
            </ul>
        </nav>
        <p className={styles.footerCopy}>© 2017 Nomadgram</p>
    </footer>
);

Footer.contextTypes = {
    t: PropTypes.func.isRequired,
};

export default Footer;
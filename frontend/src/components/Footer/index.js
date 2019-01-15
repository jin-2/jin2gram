import React from 'react';
import styles from './styles.scss';

const Footer = (props, context) => (
    <footer className={styles.footer}>
        <nav className={styles.footerNav}>
            <ul className={styles.footerList}>
                <li className={styles.footerItem}>About Us</li>
                <li className={styles.footerItem}>Support</li>
                <li className={styles.footerItem}>Press</li>
                <li className={styles.footerItem}>API</li>
                <li className={styles.footerItem}>Jobs</li>
                <li className={styles.footerItem}>Privacy</li>
                <li className={styles.footerItem}>Terms</li>
                <li className={styles.footerItem}>Directory</li>
                <li className={styles.footerItem}>Profiles</li>
                <li className={styles.footerItem}>Hashtag</li>
                <li className={styles.footerItem}>Language</li>
            </ul>
        </nav>
        <p className={styles.footerCopy}>© 2017 Nomadgram</p>
    </footer>
);

export default Footer;